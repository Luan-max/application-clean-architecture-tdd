import { Task } from 'src/application/entities/task';

export class TaskViewModel {
  static toHTTP(task: Task) {
    return {
      id: task.id,
      title: task.title,
    };
  }
}
