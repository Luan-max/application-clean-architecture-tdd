import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';
import { CreateUser } from 'src/application/use-cases/create-user';
import { FindAllUsers } from 'src/application/use-cases/find-all-users';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUser, FindAllUsers],
})
export class HttpModule {}
