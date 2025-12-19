import { PrismaClient } from './src/generated/prisma/client';
import animes from './data/animes.json';

const prisma = new PrismaClient();

async function main() {
  // @ts-ignore
  await prisma.anime.createMany({
    // @ts-ignore
    data: animes,
    skipDuplicates: true,
  });
  console.log('Dados importados com sucesso!');
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());