import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
@Module({ imports: [UsersModule], exports: [], providers: [] })
export class AppModule {}
