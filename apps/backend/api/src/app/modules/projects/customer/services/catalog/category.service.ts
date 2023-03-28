import { PrismaService } from '@base/libs/backend/repository/src/lib/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getCategories() {
    return await this.prisma.category.findMany();
  }
}
