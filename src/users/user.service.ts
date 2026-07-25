import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {
  helloUser(): string {
    return 'hello User1';
  }
}
@Injectable()
export class AdminService {
  helloAdmin(): string {
    return 'hello admin';
  }
}
