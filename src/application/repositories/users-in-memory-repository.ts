import { User } from '../entities/user';
import { UserRepository } from '..//repositories/user.repository';

export class InMemoryUsersRepository implements UserRepository {
  public users: User[] = [];

  async findOneUser(userId: string): Promise<User | null> {
    const user = this.users.find((item) => item.id === userId);
    return !user ? null : user;
  }

  async findAllUsers(): Promise<User[]> {
    return this.users;
  }

  async create(user: User) {
    this.users.push(user);
  }
  async update(userId: string, user: User): Promise<void> {
    let getUser = this.users.find((item) => item.id === userId);

    getUser = user;

    this.users.push(getUser);
  }
}
