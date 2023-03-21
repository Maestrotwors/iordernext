import { Injectable, NotAcceptableException } from '@nestjs/common';

@Injectable()
export class SuppliersService {
  async getSuppliers() {
    try {
      return { data: "test"};
    } catch {
      throw new NotAcceptableException();
    }
  }
}
