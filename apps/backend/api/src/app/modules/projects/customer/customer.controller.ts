import { Controller, Get } from '@nestjs/common';

import { Auth } from '../../../decorators/auth.decorator';
import { Role } from '@base/libs/backend/models/src/lib/auth/roles';
import { SuppliersService } from './services/suppliers/suppliers.service';
import { ProductsService } from './services/catalog/products.service';
import { CategoryService } from './services/catalog/category.service';

@Controller('customer')
export class CustomerController {
  constructor(
    private suppliersService: SuppliersService,
    private productsService: ProductsService,
    private categoryService: CategoryService
  ) {}

  @Get('get-suppliers')
  @Auth([Role.Customer])
  async getSuppliers() {
    return await this.suppliersService.getSuppliers();
  }

  @Get('get-catalog')
  @Auth([Role.Customer])
  async getCatalog() {
    return await this.productsService.getProducts();
  }

  @Get('get-categories')
  @Auth([Role.Customer])
  async getCategories() {
    return await this.categoryService.getCategories();
  }
}
