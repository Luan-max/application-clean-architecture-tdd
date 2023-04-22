import { User } from '../../../application/entities/user';

export class UserViewModel {
  static toHTTP(user: User) {
    return {
      id: user.id,
      email: user.email,
      document: user.document,
      name: user.name,
    };
  }
}
