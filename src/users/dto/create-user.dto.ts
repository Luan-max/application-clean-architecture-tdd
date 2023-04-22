import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CraeteUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  document: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
