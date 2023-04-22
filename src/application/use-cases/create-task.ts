import { Injectable } from '@nestjs/common';
import { Task } from '../entities/task';
import { TaskRepository } from '../repositories/task.repository';

interface CreateTaskRequestRequest {
  title: string;
}

interface CreateTaskResponse {
  task: Task;
}

@Injectable()
export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(
    createTaskRequestRequest: CreateTaskRequestRequest,
  ): Promise<CreateTaskResponse> {
    const { title } = createTaskRequestRequest;

    const task = new Task({
      title,
    });

    await this.taskRepository.create(task);

    return {
      task,
    };
  }
}
