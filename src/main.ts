import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExecutionTimeInterceptor } from './common/execution-time/execution-time.interceptor';
import { CustomHttpGlobalException } from './common/execution-time/exceptions/custom-http-global.exception';
import { GuardGuard } from './common/guard/guard.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.useGlobalInterceptors(new ExecutionTimeInterceptor());
  app.useGlobalFilters(new CustomHttpGlobalException());
  app.useGlobalGuards(new GuardGuard());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
