import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

import { ProductsModule } from './app/products.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ProductsModule, {
    name: 'KAFKA_MICROSERVICE',
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'client_' + Date.now() + Math.random(),
        brokers: ['localhost:29092'],
      },
      consumer: {
        groupId: 'customer-products-consumer',
      },
    },
    logger: ['error', 'log'],
  });
  await app.listen();
  Logger.log(`🚀 Microservice products is running`);
}

bootstrap();
