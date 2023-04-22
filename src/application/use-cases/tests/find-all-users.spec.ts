import { InMemoryUsersRepository } from '../../repositories/users-in-memory-repository';
import { FindAllUsers } from '../find-all-users';
import { makeUser } from './factories/user.factory';

describe('FindAllUsers', () => {
  it('when list all users', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const findAllUseCase = new FindAllUsers(usersRepository);

    const user = makeUser();

    await usersRepository.create(user);

    await findAllUseCase.execute();

    expect(usersRepository.users).toHaveLength(1);
  });
});
