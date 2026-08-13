import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UserResponseDto } from './dtos/user-responseDtodto';

@Injectable()
export class UserService {
  private readonly users: UserEntity[] = [
    { id: '1', username: 'yousef', email: 'yousef', country: 'egypt' },
  ];
  find(): UserEntity[] {
    return this.users;
  }
  findOne(id: string): UserEntity | undefined {
    return this.users.find((el) => el.id === id);
  }
  create(userData): UserResponseDto {
    const newUser: UserEntity = { ...userData, id: '2' };
    this.users.push(newUser);
    return new UserResponseDto(newUser);
  }
  update(id: string, input: UpdateUserDto): UserEntity {
    const userIndex = this.users.findIndex((el) => el.id === id);
    return (this.users[userIndex] = { ...this.users[userIndex], ...input });
  }
}
