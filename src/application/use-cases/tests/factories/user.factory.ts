import { User, UserProps } from '../../../entities/user';

type Override = Partial<UserProps>;

export function makeUser(override: Override = {}) {
  return new User({
    name: 'john',
    document: '99999999999',
    email: 'john@john.com',
    ...override,
  });
}
