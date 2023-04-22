import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { CreateUser } from '../../../application/use-cases/create-user';
import { FindAllUsers } from '../../../application/use-cases/find-all-users';
import { UserViewModel } from '../view-models/user.view-model';
import { User } from 'src/application/entities/user';

@Controller('users')
export class UsersController {
  constructor(
    private createUser: CreateUser,
    private findAllUsers: FindAllUsers,
  ) {}

  @Post()
  async create(@Body() body: CreateUserDTO) {
    const { name, email, document } = body;

    const { user } = await this.createUser.execute({
      name,
      email,
      document,
    });

    return {
      user: UserViewModel.toHTTP(user),
    };
  }

  @Get()
  async findAll(): Promise<User[]> {
    const { users } = await this.findAllUsers.execute();
    return users;
  }
}
