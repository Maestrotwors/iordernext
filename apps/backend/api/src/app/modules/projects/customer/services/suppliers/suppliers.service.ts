import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';
import { ApiResponseSuppliers } from '@api-models/customer/suppliers';
@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async getSuppliers(): Promise<ApiResponseSuppliers> {
    return await this.prisma.supplier.findMany();
  }
}
