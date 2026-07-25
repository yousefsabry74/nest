import { Module } from '@nestjs/common';
import { UserAdminController, UserController } from './user.controller';
import { AdminService, UserService } from './user.service';

@Module({
  controllers: [UserController, UserAdminController],
  providers: [UserService, AdminService],
})
export class UserModule {}
