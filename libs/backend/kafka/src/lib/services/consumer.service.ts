import { Injectable, } from '@nestjs/common';

@Injectable()
export class ConsumerService {
	/*
	private readonly kafka = new Kafka({
		brokers: ["localhost:29092"]
	});

	private readonly consumers: Consumer[] = [];

	async consume(topics: ConsumerSubscribeTopics, config: any){
		const consumer = this.kafka.consumer({ groupId: 'nest-kafka'});
		await consumer.connect();
		await consumer.subscribe(topics);
		await consumer.run(config);
		this.consumers.push(consumer);
	}

	async onApplicationShutdown() {
		for (const consumer of this.consumers) {
			await consumer.disconnect();
		}
	}*/
}
