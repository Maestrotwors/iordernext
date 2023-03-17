import { Injectable } from '@nestjs/common';

@Injectable()
export class ProducerService {
	/*
	private readonly kafka = new Kafka({
		brokers: [`${env.KAFKA_HOST}:${env.KAFKA_PORT}`]
	});

	private readonly producer: Producer = this.kafka.producer();

	async produce(record: ProducerRecord) {
		await this.producer.send(record);
	}

	async onApplicationShutdown() {
		await this.producer.disconnect();
	}

	async onModuleInit() {
		await this.producer.connect();
	}*/
}