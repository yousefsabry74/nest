import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { App_Name } from './app.constant';
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [
    UserService,
    {
      provide: App_Name,
      useValue: 'nest app',
    },
  ],
  exports: [],
})
export class UsersModule {}
