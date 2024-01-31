import { Exclude } from 'class-transformer';

export class User {
  id: number;
  username: string;
  @Exclude()
  password: string;
  displayName: string;
}

export const mockUsers: User[] = [
  {
    id: 1,
    username: 'Smit',
    password: 'password',
    displayName: 'Smit the Developer',
  },
  {
    id: 2,
    username: 'Shaival',
    password: 'password@123',
    displayName: 'Shaival the Data Scientist',
  },
];
