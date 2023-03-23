import { Controller, Get } from '@nestjs/common';

import { Auth } from '../../../decorators/auth.decorator';
import { Role } from '@base/libs/backend/models/src/lib/auth/roles';
import { SuppliersService } from './services/suppliers/suppliers.service';

@Controller('customer')
export class CustomerController {
  constructor(private suppliersService: SuppliersService) {}

  @Get('get-suppliers')
  @Auth([Role.Customer])
  async getSuppliers() {
    return await this.suppliersService.getSuppliers();
  }
}
