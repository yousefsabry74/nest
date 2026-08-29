import { SetMetadata } from '@nestjs/common';
import { App_Is_Public } from 'src/users/app.constant';

export const Public = () => SetMetadata(App_Is_Public, true);
