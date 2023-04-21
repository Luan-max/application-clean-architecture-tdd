import { Body, Controller, Post } from '@nestjs/common';
import { CraeteUserDTO } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CraeteUserDTO): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
