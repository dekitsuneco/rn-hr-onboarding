import { instanceToPlain, plainToInstance } from 'class-transformer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiService } from '../api';
import { AuthCredentials, AuthResponse } from './models';

class AuthService {
  public authorize(credentials: AuthCredentials): Observable<AuthResponse> {
    const request = new AuthCredentials(credentials);

    return apiService
      .post('login', instanceToPlain(request))
      .pipe(map((response) => plainToInstance(AuthResponse, response)));
  }
}

export const authService = new AuthService();
