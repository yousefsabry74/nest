import { Exclude, Expose } from 'class-transformer';

export class UserResponseDto {
  @Expose({ name: 'Id' })
  id: string;
  @Expose({ name: 'UserName' })
  username: string;
  @Exclude()
  country: string;
  @Expose({ name: 'Email' })
  email: string;
  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
