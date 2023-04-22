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

  async findAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany();

    return users.map(PrismaUserMapper.toDomain);
  }

  async findOneUser(userId: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    return PrismaUserMapper.toDomain(user);
  }
}
