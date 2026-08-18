import { HttpException } from '@nestjs/common';

export class CustomHttpException extends HttpException {
  constructor() {
    super('CustomHttpException', 209);
  }
}
