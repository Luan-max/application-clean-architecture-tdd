import { User as RawUser } from '@prisma/client';
import { User } from '../../../../application/entities/user';

export class PrismaUserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      document: user.document,
    };
  }

  static toDomain(data: RawUser): User {
    return new User(
      {
        name: data.email,
        document: data.document,
        email: data.email,
      },
      data.id,
    );
  }
}
