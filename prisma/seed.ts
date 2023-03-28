// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
	// create dummy articles
		const product1 = await prisma.product.upsert({
      where: { id: 1 },
      update: {},
      create: {
        name: 'Gilette',
        available: 200,
        price: 20,
        image:
          'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/7702018874293.jpg',
      },
    });

    const product2 = await prisma.product.upsert({
      where: { id: 2 },
      update: {},
      create: {
        name: 'Fairy',
        available: 5000,
        price: 40,
        image:
          'https://prodasnovastacc.blob.core.windows.net/product-small-images/3/5413149314092.jpg',
      },
    });

	// password = "test", hash is $2a$10$JjEFoHbJH32awcKgsFfPReonEVy3P9ZEpNlqm2tWB/dOQ6IxknM4S
	const user1 = await prisma.user.upsert({
		where: { login: "test" },
		update: {},
		create: {
			login: "test",
			password: "$2a$10$JjEFoHbJH32awcKgsFfPReonEVy3P9ZEpNlqm2tWB/dOQ6IxknM4S",
			email: "testemail",
			name: "Вася"
		}
	});

	console.log({ product1, product2, user1 });
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
