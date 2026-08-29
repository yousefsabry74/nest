import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { UserResponseDto } from './dtos/user-responseDtodto';
import { CustomHttpException } from 'src/common/execution-time/exceptions/custom-http.exception';

@Injectable()
export class UserService {
  private readonly users: UserEntity[] = [
    { id: '1', username: 'yousef', email: 'yousef', country: 'egypt' },
  ];
  find(): UserEntity[] {
    return this.users;
  }
  findOne(id: string): UserEntity {
    const user = this.users.find((el) => el.id === id);
    if (!user) {
      throw new CustomHttpException();
    }
    return user;
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
