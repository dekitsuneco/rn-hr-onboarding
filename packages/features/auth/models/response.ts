import { Expose } from 'class-transformer';

export class AuthResponse {
  @Expose()
  public token: string;
}
