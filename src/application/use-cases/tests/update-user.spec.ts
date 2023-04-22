import { InMemoryUsersRepository } from '../../repositories/users-in-memory-repository';
import { UpdateUser } from '../update-user';

describe('UpdateUser - useCase', () => {
  it('should be able to update user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const updateUserUseCase = new UpdateUser(usersRepository);

    const user = {
      name: 'john',
      document: '99999999999',
      email: 'john@john.com',
    };
    const userId = '1';

    await updateUserUseCase.execute(userId, user);

    expect(usersRepository.users).toHaveLength(1);
    expect(usersRepository.users[0]).toEqual({
      _id: undefined,
      props: { ...user },
    });
  });
});
