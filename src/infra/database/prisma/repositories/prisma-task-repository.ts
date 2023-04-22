import { Injectable } from '@nestjs/common';
import { Task } from 'src/application/entities/task';
import { TaskRepository } from '../../../../application/repositories/task.repository';
import { PrismaTaskMapper } from '../mappers/prisma-task-mappers';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private prisma: PrismaService) {}
  async create(task: Task): Promise<void> {
    const prismaTaskData = PrismaTaskMapper.toPrisma(task);

    await this.prisma.task.create({
      data: prismaTaskData,
    });
    await this.prisma;
  }
}
