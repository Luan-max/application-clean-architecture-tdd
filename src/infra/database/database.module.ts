import { Module } from '@nestjs/common';
import { TaskRepository } from 'src/application/repositories/task.repository';
import { UserRepository } from '../../application/repositories/user.repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';
import { PrismaTaskRepository } from './prisma/repositories/prisma-task-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: TaskRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [UserRepository, TaskRepository],
})
export class DatabaseModule {}
