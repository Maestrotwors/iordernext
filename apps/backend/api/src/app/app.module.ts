import { Module } from '@nestjs/common';
import { SupplierModule } from './modules/projects/supplier/supplier.module';
import { CustomerModule } from './modules/projects/customer/customer.module';
import { AdminModule } from './modules/projects/admin/admin.module';
import { AuthModule } from './modules/shared/auth/auth.module';

@Module({
  imports: [ AuthModule, CustomerModule, SupplierModule, AdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
