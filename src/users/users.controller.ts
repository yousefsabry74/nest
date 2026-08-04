import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  } from '@nestjs/common';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './user.entity';
@Controller('users')
export class UsersController {
  private readonly users: UserEntity[] = [
    { id: '1', username: 'yousef', email: 'yousef', country: 'egypt' },
  ];
  @Get()
  find(): UserEntity[] {
    return this.users;
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string): UserEntity | undefined {
    return this.users.find((el) => el.id === id);
  }
  @Post()
  create(@Body() userData: CreateUserDto) {
    const newUser: UserEntity = { ...userData, id: '2' };
    this.users.push(newUser);
    return newUser;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateUserDto) {
    const userIndex = this.users.findIndex((el) => el.id === id);
    this.users[userIndex] = { ...this.users[userIndex], ...input };
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
