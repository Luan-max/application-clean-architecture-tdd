import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './controllers/users.controller';
import { CreateUser } from 'src/application/use-cases/create-user';
import { FindAllUsers } from 'src/application/use-cases/find-all-users';
import { FindUserById } from 'src/application/use-cases/find-user-by-id';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [CreateUser, FindAllUsers, FindUserById],
})
export class HttpModule {}
