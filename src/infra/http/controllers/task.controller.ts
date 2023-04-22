import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateTaskDTO } from '../dtos/create-task.dto';
import { CreateTask } from 'src/application/use-cases/create-task';
import { TaskViewModel } from '../view-models/task.view-model';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(private createTask: CreateTask) {}

  @Post()
  @ApiOperation({ summary: 'Create task' })
  @ApiResponse({
    status: 201,
    description: 'Task created with successfully!',
    type: CreateTaskDTO,
  })
  @ApiBody({ type: CreateTaskDTO })
  async create(@Body() body: CreateTaskDTO) {
    const { title } = body;

    const { task } = await this.createTask.execute({
      title,
    });

    return {
      task: TaskViewModel.toHTTP(task),
    };
  }
}
