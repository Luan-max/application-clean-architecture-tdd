import { InMemoryTaskRepository } from '../../../application/repositories/in-memory/task-in-memory-repository';
import { CreateTask } from '../create-task';

describe('CreateTask', () => {
  it('should be able to create task', async () => {
    const taskRepository = new InMemoryTaskRepository();
    const createTaskUseCase = new CreateTask(taskRepository);

    const task = {
      title: 'programming',
    };

    await createTaskUseCase.execute(task);

    expect(taskRepository.tasks).toHaveLength(1);
    expect(taskRepository.tasks[0]).toEqual({
      _id: undefined,
      props: { ...task },
    });
  });
});
