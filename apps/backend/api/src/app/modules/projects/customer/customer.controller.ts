import { Controller, Get } from '@nestjs/common';
import { SuppliersService } from './services/suppliers/suppliers.service';

@Controller('customer')
export class CustomerController {
  constructor(private suppliersService: SuppliersService) {}

  @Get('get-suppliers')
  async getSuppliers() {
    return await this.suppliersService.getSuppliers();
  }
}
