import { PrismaClient } from '@prisma/client';
import { count } from 'console';

const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const alice = await prisma.donation.create({
    data: {
      email: 'alice@test.com',
      displayName: 'Alice',
      count: 5,
    },
  });

  console.log(alice);
}

main()
  .catch((err: Error) => {
    console.log(err.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$connect();
  });
