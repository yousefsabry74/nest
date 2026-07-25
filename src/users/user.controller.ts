import { Controller, Get } from '@nestjs/common';
import { AdminService, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  helloUser() {
    return this.userService.helloUser();
  }
}
@Controller('user')
export class UserAdminController {
  constructor(private adminService: AdminService) {}
  @Get('/admin')
  findAll() {
    return this.adminService.helloAdmin();
  }
}
