import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';
import { CreateUser } from 'src/application/use-cases/create-user';
import { FindAllUsers } from 'src/application/use-cases/find-all-users';
import { FindUserById } from 'src/application/use-cases/find-user-by-id';
import { UpdateUser } from 'src/application/use-cases/update-user';
import { TaskController } from './controllers/task.controller';
import { CreateTask } from 'src/application/use-cases/create-task';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController, TaskController],
  providers: [CreateUser, FindAllUsers, FindUserById, UpdateUser, CreateTask],
})
export class HttpModule {}
