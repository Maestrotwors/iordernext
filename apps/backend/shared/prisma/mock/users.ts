// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  for (var i = 0; i < 50001; i++) {
    // password = "test", hash is $2a$10$JjEFoHbJH32awcKgsFfPReonEVy3P9ZEpNlqm2tWB/dOQ6IxknM4S
	i++;
	console.log('mock user created, id: ' + i);
    const user1 = await prisma.user.upsert({
      where: { login: 'test' },
      update: {},
      create: {
        login: 'user-' + i,
        password:
          '$2a$10$JjEFoHbJH32awcKgsFfPReonEVy3P9ZEpNlqm2tWB/dOQ6IxknM4S',
        email: 'testemail-usern-' + i,
        name: 'user name -' + i,
      },
    });
  }
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
