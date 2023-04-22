import { Body, Controller, Post, Get, Param, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateUserDTO } from '../dtos/create-user.dto';
import { CreateUser } from '../../../application/use-cases/create-user';
import { FindAllUsers } from '../../../application/use-cases/find-all-users';
import { UserViewModel } from '../view-models/user.view-model';
import { User } from 'src/application/entities/user';
import { FindUserById } from 'src/application/use-cases/find-user-by-id';
import { UpdateUser } from 'src/application/use-cases/update-user';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private createUser: CreateUser,
    private findAllUsers: FindAllUsers,
    private findOneUserById: FindUserById,
    private updateUser: UpdateUser,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'Users created with successfully!',
    type: CreateUserDTO,
  })
  @ApiBody({ type: CreateUserDTO })
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

  @Put(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({
    status: 200,
    description: 'Users created with successfully!',
    type: CreateUserDTO,
  })
  @ApiBody({ type: CreateUserDTO })
  async update(@Param('id') userId: any, @Body() body: CreateUserDTO) {
    const { user } = await this.updateUser.execute(userId, body);

    return {
      user: UserViewModel.toHTTP(user),
    };
  }

  @Get()
  @ApiOperation({ summary: 'List users' })
  @ApiResponse({
    status: 200,
    type: [CreateUserDTO],
  })
  async findAll(): Promise<User[]> {
    const { users } = await this.findAllUsers.execute();
    return users;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one user' })
  @ApiResponse({
    status: 200,
    type: CreateUserDTO,
  })
  async findOne(@Param('id') userId: any): Promise<User> {
    const { user } = await this.findOneUserById.execute({ userId });
    return user;
  }
}
