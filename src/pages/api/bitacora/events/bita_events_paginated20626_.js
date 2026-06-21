import prisma from "@/lib/prisma";

export default async function handle1(req, res) {
  const { query } = req;
  const { search, tipo } = query;

  const offset = parseInt(query.offset) || 0;
  const limit = parseInt(query.limit) || 9; // Sincronizado con tu límite de 9 del frontend

  try {
    if (offset < 0) {
      return res.status(400).json("Offset value should not be negative");
    }

    const searchAsNumber = parseInt(search);
    const isNumeric = !isNaN(searchAsNumber);

    // Creamos un objeto de filtros reutilizable para que el COUNT sea exacto y rápido
    const whereConditions = {
      AND: [
        search
          ? {
              OR: [
                ...(isNumeric
                  ? [
                      { id: { equals: searchAsNumber } },
                      { bitacora_id: { equals: searchAsNumber } },
                    ]
                  : []),
                { description: { contains: search, mode: "insensitive" } },
                {
                  event: {
                    description: { contains: search, mode: "insensitive" },
                  },
                },
              ],
            }
          : {},
        tipo
          ? {
              tipoEvent: { description: { equals: tipo } },
            }
          : {},
      ],
    };

    // Ejecutamos el conteo filtrado y la búsqueda en paralelo (¡Mucho más rápido!)
    const [count, results] = await Promise.all([
      prisma.bitaEvents.count({ where: whereConditions }), // Conteo optimizado solo de lo filtrado
      prisma.bitaEvents.findMany({
        take: limit,
        skip: offset,
        where: whereConditions,
        orderBy: {
          event_date: "desc", // IMPORTANTE: Asegúrate de que 'event_date' tenga un INDEX en tu DB
        },
        include: {
          event: { select: { id: true, description: true } },
          tipoEvent: { select: { id: true, description: true } },
          bitacora: { select: { id: true, author: true, bitacora_date: true } },
        },
      }),
    ]);

    const nextOffset = offset + limit;
    const hasNext = nextOffset < count;

    return res.status(200).json({
      count,
      results,
      next: hasNext ? nextOffset : null,
      previous: offset > 0 ? Math.max(0, offset - limit) : null,
      currentCountPerPage: results.length,
    });
  } catch (err) {
    console.error("Error en API:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
