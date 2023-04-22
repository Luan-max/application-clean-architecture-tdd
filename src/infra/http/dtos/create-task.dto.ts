import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDTO {
  @IsString()
  @ApiProperty({
    description: 'Task',
    example: 'Programming',
  })
  title: string;
}
