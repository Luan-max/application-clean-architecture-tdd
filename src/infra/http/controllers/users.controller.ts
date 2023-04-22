import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { CreateUser } from '../../../application/use-cases/create-user';
import { UserViewModel } from '../view-models/user.view-model';

@Controller('users')
export class UsersController {
  constructor(private createUser: CreateUser) {}

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
}
