import { Injectable } from '@nestjs/common';
import { User } from '../../../../application/entities/user';
import { UserRepository } from '../../../../application/repositories/user.repository';
import { PrismaUserMapper } from '../mappers/prisma-users-mappers';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User): Promise<void> {
    const prismaUserData = PrismaUserMapper.toPrisma(user);

    await this.prisma.user.create({
      data: prismaUserData,
    });
  }
}
