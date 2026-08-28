import prisma from "../../../../../lib/prisma";

export default async function handle1(req, res) {
  const bitacoraId = req.query.id;
  console.log("bitacoraId", bitacoraId);
  const [result] = await prisma.$transaction([
    prisma.bitaEvents.findMany({
      where: { bitacora_id: Number(bitacoraId) },
      orderBy: { id: "asc" },
    }),
  ]);
  res.json(result);
}
