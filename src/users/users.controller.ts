import {
  Controller,
  Get,
  // HttpException,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersInterceptor } from './interceptors/users.interceptors';
import { UserErrorInterceptor } from './interceptors/errors.interceptors';

@Controller('api/users')
export class UserController {
  constructor(private usersService: UsersService) {}
  //GET /api/users
  @Get()
  @UseInterceptors(UsersInterceptor)
  getUsers() {
    console.log('Inside get Users Handler');
    return this.usersService.getUsers();
  }
  @Post()
  @UseInterceptors(UserErrorInterceptor)
  createUser() {
    // throw new HttpException('Bad Request', 400);
  }
}
