import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
  compare(date1: Date, date2: Date): boolean {
    return this.toTimestamp(date1) === this.toTimestamp(date2);
  };

  toTimestamp = (strDate: Date): number => {
    const dt = new Date(strDate).getTime();
    return dt / 1000;
  };
}
