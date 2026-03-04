import prisma from "@/lib/prisma";

export default async function handle1(req, res) {
  const { query } = req;
  const { search, tipo } = req.query;

  const offset = parseInt(query.offset) || 0;
  const limit = parseInt(query.limit) || 15;

  try {
    if (offset < 0) {
      return res.status(400).json("Offset value should not be negative");
    }

    // 1. Intentamos convertir 'search' a número para la búsqueda por ID
    const searchAsNumber = parseInt(search);
    const isNumeric = !isNaN(searchAsNumber);

    const count = await prisma.bitaEvents.count();
    const counts = await prisma.bitaEvents.groupBy({
      by: ["tipo_event_id"],
      _count: {
        tipo_event_id: true,
      },
    });

    const results = await prisma.bitaEvents.findMany({
      take: limit,
      skip: offset,
      where: {
        AND: [
          search
            ? {
                OR: [
                  // Búsqueda por IDs (Solo si es un número válido)
                  ...(isNumeric
                    ? [
                        { id: { equals: searchAsNumber } },
                        { bitacora_id: { equals: searchAsNumber } }, // <-- Nuevo filtro agregado
                      ]
                    : []),
                  // Búsquedas de texto existentes
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
      },
      orderBy: {
        event_date: "desc",
      },
      include: {
        event: { select: { id: true, description: true } },
        tipoEvent: { select: { id: true, description: true } },
        bitacora: { select: { id: true, author: true, bitacora_date: true } },
      },
    });

    const nextOffset = offset + limit;
    const hasNext = nextOffset < count;

    return res.status(200).json({
      count,
      counts,
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
