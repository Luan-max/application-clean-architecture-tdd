import { Task } from '../../entities/task';
import { TaskRepository } from '../task.repository';

export class InMemoryTaskRepository implements TaskRepository {
  public tasks: Task[] = [];

  async create(task: Task) {
    this.tasks.push(task);
  }
}
