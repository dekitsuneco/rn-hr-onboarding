import { Expose } from 'class-transformer';
import { User } from '../../data';

export class AuthResponse {
  @Expose()
  public token: string;

  @Expose()
  public user: User;
}
