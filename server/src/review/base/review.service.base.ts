import { PrismaService } from "nestjs-prisma";
import { Prisma, Review, Customer } from "@prisma/client";

export class ReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindManyArgs>
  ): Promise<number> {
    return this.prisma.review.count(args);
  }

  async findMany<T extends Prisma.ReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindManyArgs>
  ): Promise<Review[]> {
    return this.prisma.review.findMany(args);
  }
  async findOne<T extends Prisma.ReviewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewFindUniqueArgs>
  ): Promise<Review | null> {
    return this.prisma.review.findUnique(args);
  }
  async create<T extends Prisma.ReviewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewCreateArgs>
  ): Promise<Review> {
    return this.prisma.review.create<T>(args);
  }
  async update<T extends Prisma.ReviewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewUpdateArgs>
  ): Promise<Review> {
    return this.prisma.review.update<T>(args);
  }
  async delete<T extends Prisma.ReviewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReviewDeleteArgs>
  ): Promise<Review> {
    return this.prisma.review.delete(args);
  }

  async getCustomerId(parentId: string): Promise<Customer | null> {
    return this.prisma.review
      .findUnique({
        where: { id: parentId },
      })
      .customerId();
  }
}
