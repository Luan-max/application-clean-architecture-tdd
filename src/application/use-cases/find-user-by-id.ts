import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user.repository';

interface FindUserByIdRequest {
  userId: string;
}

interface FindUserByIdResponse {
  user: User;
}

@Injectable()
export class FindUserById {
  constructor(private usersRepository: UserRepository) {}

  async execute(request: FindUserByIdRequest): Promise<FindUserByIdResponse> {
    try {
      const { userId } = request;

      const user = await this.usersRepository.findOneUser(userId);
      return { user };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
