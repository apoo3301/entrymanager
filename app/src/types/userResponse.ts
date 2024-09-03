import { User } from '@/types/user';

export interface UsersResponse {
  items: User[];
  totalPages: number;
}