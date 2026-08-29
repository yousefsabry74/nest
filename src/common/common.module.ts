import { Module } from '@nestjs/common';
import { AppGuard } from './guard/app.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  providers: [{ provide: APP_GUARD, useClass: AppGuard }],
})
export class CommonModule {}
