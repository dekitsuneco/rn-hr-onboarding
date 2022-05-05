import { Expose, Type } from 'class-transformer';
import { User } from '../../data';

export class AuthResponse {
  @Expose()
  public token: string;

  @Expose()
  @Type(() => User)
  public user: User;
}
