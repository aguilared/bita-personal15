import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const [
    vacas,
    totalAnimalsMuertos,
    totalAnimalsArqui,
    totalAnimalsJose,
    totalAnimalsAngel,
    totalAnimalsYoel,
    totalAnimalsCruz,
    totalAnimalsPetra,
    totalAnimalsMilagro,
  ] = await prisma.$transaction([
    prisma.$queryRaw`SELECT id, name, owner_id  FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND live = false  ORDER BY owner_id ASC`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND live = false`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND owner_id= 1 AND live = false`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND owner_id= 2 AND live = false`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND owner_id= 3 AND live = false`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND owner_id= 4 AND live = false`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND owner_id= 5 AND live = false`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND owner_id= 6 AND live = false`,
    prisma.$executeRaw`SELECT * FROM animals WHERE (clase_id =1 OR clase_id=2 OR clase_id=3 OR clase_id=8 OR clase_id=9 OR clase_id=10) AND owner_id= 7 AND live = false`,
  ]);

  res.json({
    totalAnimalsMuertos,
    totalAnimalsArqui,
    totalAnimalsJose,
    totalAnimalsAngel,
    totalAnimalsYoel,
    totalAnimalsCruz,
    totalAnimalsPetra,
    totalAnimalsMilagro,
    vacas,
  });
}
