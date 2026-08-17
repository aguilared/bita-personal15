export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  console.log("ID", bitacoraId);

  const result = await prisma.bitacora.findUnique({
    where: {
      id: Number(bitacoraId),
    },
    include: {
      author: {
        select: { name: true },
      },
      bita_events: true, // Traemos los eventos para contarlos en JS
    },
  });

  if (!result) {
    return res.status(404).json({ error: "No encontrado" });
  }

  // Creamos la respuesta con el conteo calculado de forma segura
  const response = {
    ...result,
    _count: {
      bita_events: result.bita_events.length,
    },
  };

  res.json(response);
}
