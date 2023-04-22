import { Injectable } from '@nestjs/common';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

interface UpdateUserRequestBody {
  name: string;
  email: string;
  document: string;
}

interface UpdateUserResponse {
  user: User;
}

@Injectable()
export class UpdateUser {
  constructor(private usersRepository: UserRepository) {}

  async execute(
    userId: string,
    updateUserRequestRequest: UpdateUserRequestBody,
  ): Promise<UpdateUserResponse> {
    const { name, email, document } = updateUserRequestRequest;

    const user = new User({
      email,
      name,
      document,
    });

    await this.usersRepository.update(userId, user);

    return {
      user,
    };
  }
}
