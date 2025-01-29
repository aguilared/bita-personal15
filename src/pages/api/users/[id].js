import prisma from "@/lib/prisma";

export default async function handle1(req, res) {
  console.log("REQBODY", req.body);
  console.log("REQQUERY", req.query);
  const ID = req.query.id;
  const [result] = await prisma.$transaction([
    prisma.user.findUnique({
      where: { id: Number(ID) },
      }),
  ]);
  res.json(result);
}
