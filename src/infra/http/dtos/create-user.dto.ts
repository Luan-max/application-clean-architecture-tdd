import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsString()
  @ApiProperty({
    description: 'Name',
    example: 'John',
  })
  name: string;
  @IsString()
  @ApiProperty({
    description: 'Document',
    example: '999999999999',
  })
  document: string;
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'E-mail',
    example: 'johndoe@jhon.com',
  })
  email: string;
}
