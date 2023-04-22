import { User } from '../entities/user';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findAllUsers(): Promise<User[]>;
  abstract findOneUser(userId: string): Promise<User>;
}
