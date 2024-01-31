import { Injectable } from '@nestjs/common';
import { mockUsers } from './users';
@Injectable()
export class UsersService {
  getUsers() {
    return mockUsers;
  }
}
