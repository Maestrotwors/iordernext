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

  const category1 = await prisma.category.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Ватно-паперові гігієнічні вироби',
      subSupplierId: 1,
    },
  });
  const category2 = await prisma.category.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Гелі для душу /мило жіночі',
      subSupplierId: 1,
    },
  });
  const category3 = await prisma.category.upsert({
    where: { id: 3 },
    update: {},
    create: {
      name: 'Гелі для душу /мило чоловічі',
      subSupplierId: 1,
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

  const supplier1 = await prisma.supplier.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'SavService Neproducti',
      image:
        'https://prodasnovastacc.blob.core.windows.net/supplier-logos/3.png'
    },
  });
  const supplier2 = await prisma.supplier.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'Rusalochka',
      image:
        'https://prodasnovastacc.blob.core.windows.net/supplier-logos/22.png',
    },
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
