import { DateService } from './date.service';
import { Module } from '@nestjs/common';

@Module({
	controllers: [],
	providers: [DateService],
	exports: [DateService]
})
export class SystemModule {}
