import { Controller, Get } from '@nestjs/common';

import { Auth } from '../../../decorators/auth.decorator';
import { Role } from '@base/libs/backend/models/src/lib/auth/roles';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { CatalogService } from './services/catalog/catalog.service';

@Controller('customer')
export class CustomerController {
  constructor(
    private suppliersService: SuppliersService,
    private catalogService: CatalogService
  ) {}

  @Get('get-suppliers')
  @Auth([Role.Customer])
  async getSuppliers() {
    return await this.suppliersService.getSuppliers();
  }

  @Get('get-catalog')
  @Auth([Role.Customer])
  async getCatalog() {
    return await this.catalogService.getCatalog();
  }
}
