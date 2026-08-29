import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Patch,
  Post,
  SetMetadata,
} from '@nestjs/common';
import { UpdateUserDto } from './dtos/updateUser.dto';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './user.entity';
import { UserService } from './users.service';
import {  App_Name } from './app.constant';
import { UserResponseDto } from './dtos/user-responseDtodto';
import { Public } from 'src/common/decoratores/public.decoratoer';
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UserService,
    @Inject(App_Name) private readonly appName,
  ) {}
  @Get()
  @Public()
  find(): UserEntity[] {
    return this.userService.find();
  }
  @Get(':id')
  findOne(@Param('id') id: string): UserEntity | undefined {
    return this.userService.findOne(id);
  }
  @Post()
  create(@Body() userData: CreateUserDto): UserResponseDto {
    return this.userService.create(userData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() input: UpdateUserDto) {
    return this.userService.update(id, input);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
