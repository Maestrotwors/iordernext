import { Injectable } from '@nestjs/common';
import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';

@Injectable()
export class SubSuppliersService {
  constructor(private prisma: PrismaService) {}

  async getSubSuppliers() {
    return [{id:1, name: 'subsupplier1'}, {id:2, name: 'subsupplier2'}];
    //return await this.prisma.supplier.findMany();
  }
}
