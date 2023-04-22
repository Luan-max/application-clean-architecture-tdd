import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

interface FindAllUsersResponse {
  users: User[];
}

@Injectable()
export class FindAllUsers {
  constructor(private usersRepository: UserRepository) {}

  async execute(): Promise<FindAllUsersResponse> {
    try {
      const users = await this.usersRepository.findAllUsers();
      return { users };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
