import { PrismaService } from '@backend/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async getSuppliers() {
    return await this.prisma.supplier.findMany();
  }
}
