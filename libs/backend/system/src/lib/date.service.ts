import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
	toTimestamp = (strDate) => {
		const dt = new Date(strDate).getTime();
		return dt / 1000;
	};

	compare(date1, date2) {
		return this.toTimestamp(date1) === this.toTimestamp(date2);
	}
}