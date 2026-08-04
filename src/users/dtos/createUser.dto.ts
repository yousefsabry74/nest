import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'incorrect username' })
  @MinLength(3, { message: 'incorrect username' })
  @MaxLength(10, { message: 'incorrect username' })
  readonly username: string;
  @IsString()
  readonly country: string;
  @IsString()
  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string;
}
