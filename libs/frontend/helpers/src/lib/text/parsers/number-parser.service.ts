import { Injectable } from '@angular/core';
import { REGEX_DECIMAL_NUMBER, REGEX_NUMBER } from '@frontend/constants';

@Injectable({ providedIn: 'root' })
export class NumberParser {
  public parseNumber(value: string) {
    return value.replace(REGEX_NUMBER, '');
  }

  public parseDecimal(value: string) {
    return value.replace(/,/g, '.').replace(REGEX_DECIMAL_NUMBER, '');
  }
}
