import { InMemoryUsersRepository } from '../../repositories/in-memory/users-in-memory-repository';
import { CreateUser } from '../create-user';

describe('CreateUser', () => {
  it('should be able to create user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUserUseCase = new CreateUser(usersRepository);

    const user = {
      name: 'john',
      document: '99999999999',
      email: 'john@john.com',
    };

    await createUserUseCase.execute(user);

    expect(usersRepository.users).toHaveLength(1);
    expect(usersRepository.users[0]).toEqual({
      _id: undefined,
      props: { ...user },
    });
  });
});
