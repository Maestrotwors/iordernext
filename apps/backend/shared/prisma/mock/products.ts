// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    for (var i = 0; i < 1000; i++) {
    console.log('mock product created, id: ' + i + 6);
    const productX = await prisma.product.upsert({
      where: { id: i + 6 },
      update: {},
      create: {
        name: 'MR PROPER Рідкий миючий засіб для прибирання підлоги та стін Лимон 1л - длинный текст далее длинный текст далее длинный текст далее',
        available: 3000,
        price: 30,
        image:
          'https://prodasnovastacc.blob.core.windows.net/product-images/3/4084500644762.jpg',
      },
    })
	};
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
