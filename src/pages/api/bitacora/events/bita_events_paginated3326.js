import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client"; // Para detectar errores específicos de Prisma

export default async function handle1(req, res) {
  const { query } = req;
  const { search, tipo } = query;

  // 1. Validación de parámetros (Sanitización)
  const offset = Math.max(0, parseInt(query.offset) || 0);
  const limit = Math.min(100, Math.max(1, parseInt(query.limit) || 15)); // Máximo 100 para evitar abusos

  try {
    const searchAsNumber = parseInt(search);
    const isNumeric = !isNaN(searchAsNumber);

    // Ejecutamos las consultas (count y findMany)
    const [count, counts, results] = await Promise.all([
      prisma.bitaEvents.count(),
      prisma.bitaEvents.groupBy({
        by: ["tipo_event_id"],
        _count: { tipo_event_id: true },
      }),
      prisma.bitaEvents.findMany({
        take: limit,
        skip: offset,
        where: {
          AND: [
            search
              ? {
                  OR: [
                    ...(isNumeric
                      ? [
                          { id: searchAsNumber },
                          { bitacora_id: searchAsNumber },
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
            tipo ? { tipoEvent: { description: { equals: tipo } } } : {},
          ],
        },
        orderBy: { event_date: "desc" },
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
      success: true,
      count,
      counts,
      results,
      pagination: {
        next: hasNext ? nextOffset : null,
        previous: offset > 0 ? Math.max(0, offset - limit) : null,
        currentCountPerPage: results.length,
      },
    });
  } catch (err) {
    // 2. Manejo detallado de errores
    console.error("--- ERROR EN API BITACORA ---");
    console.error("Mensaje:", err.message);

    // Error de conexión o sintaxis en Prisma
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(400).json({
        success: false,
        error: "Error en la consulta de base de datos",
        code: err.code, // Ej: P2002
        details: err.meta,
      });
    }

    // Error general del servidor
    return res.status(500).json({
      success: false,
      error: "Ocurrió un error inesperado en el servidor",
      message:
        process.env.NODE_ENV === "development"
          ? err.message
          : "Contacte al administrador",
    });
  }
}
