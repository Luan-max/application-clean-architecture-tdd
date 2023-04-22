import { Task as RawTask } from '@prisma/client';
import { Task } from 'src/application/entities/task';

export class PrismaTaskMapper {
  static toPrisma(data: Task) {
    return {
      title: data.title,
    };
  }

  static toDomain(data: RawTask): Task {
    return new Task(
      {
        title: data.title,
      },
      data.id,
    );
  }
}
