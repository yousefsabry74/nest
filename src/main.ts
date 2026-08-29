import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExecutionTimeInterceptor } from './common/execution-time/execution-time.interceptor';
import { CustomHttpGlobalException } from './common/execution-time/exceptions/custom-http-global.exception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ExecutionTimeInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  app.useGlobalFilters(new CustomHttpGlobalException());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
