import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

interface CreateUserRequestRequest {
  name: string;
  email: string;
  document: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUser {
  constructor(private usersRepository: UserRepository) {}

  async execute(
    createUserRequestRequest: CreateUserRequestRequest,
  ): Promise<CreateUserResponse> {
    const { name, email, document } = createUserRequestRequest;

    const user = new User({
      email,
      name,
      document,
    });

    await this.usersRepository.create(user);

    return {
      user,
    };
  }
}
