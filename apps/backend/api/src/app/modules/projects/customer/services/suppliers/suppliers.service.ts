import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async getSuppliers() {
    return await this.prisma.supplier.findMany();
  }
}
