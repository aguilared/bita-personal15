import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const result = await prisma.user.findMany({
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      name: true,
      animal: {
        select: {
          name: true,
        },
      },
      _count: {
        select: {
          animal: { where: {  clase_id: { in: [1, 2, 3, 4,5,6, 8, 9,10,14] } } },
        },
      },
    },
  });
  res.json(result);
}
