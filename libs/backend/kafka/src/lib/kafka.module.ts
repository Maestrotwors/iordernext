import { ConsumerService } from './services/consumer.service';
import { KafkaModule as KM } from "@rob3000/nestjs-kafka";
import { Module } from "@nestjs/common";
import { ProducerService } from './services/producer.service';
import { env } from "@base/config/dev.env";

@Module({
	imports: [
		KM.register([
			{
				name: "HERO_SERVICE",
				options: {
					client: {
						clientId: "hero",
						brokers: [`${env.KAFKA_HOST}:${env.KAFKA_PORT}`],
					},
					consumer: {
						groupId: "hero-consumer",
						heartbeatInterval: 0
					}
				}
			}
		])
	],
	providers: [ProducerService, ConsumerService],
	exports: [ProducerService, ConsumerService]
})
export class KafkaModule {}
