import prisma from "../../../lib/prisma";

export default async function handle1(req, res) {
  
  const result = await prisma.animal.findMany({
    where: {
      live: true,
      OR: [
        {
          clase_id: { in: [1, 2, 3, 4, 5, 6, 8, 9, 10, 14] },
        }
      ],
    },
    include: {
      owner: {
        select: { id: true, name: true },
      },
      clase: {
        select: { id: true, description: true },
      },
    },
    orderBy: { name: "asc" },
  });

  res.json(result);
}
