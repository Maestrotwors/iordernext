import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';
import { ApiResponseSuppliers } from '@api-models/customer/suppliers';
@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  getSuppliers(): Promise<ApiResponseSuppliers> {
    return this.prisma.supplier.findMany();
  }
}
