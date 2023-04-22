import { InMemoryUsersRepository } from '../../repositories/in-memory/users-in-memory-repository';
import { FindUserById } from '../find-user-by-id';
import { makeUser } from './factories/user.factory';

describe('FindUserById - useCase', () => {
  it('when find one user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const findOneUserUseCase = new FindUserById(usersRepository);

    const createUser = makeUser();

    await usersRepository.create(createUser);

    const { user } = await findOneUserUseCase.execute({
      userId: createUser.id,
    });
    expect(user).toEqual(createUser);
  });
});
