import { Observable } from 'rxjs';
import { apiService } from '../api';
import { User } from '../data';
import { map } from 'rxjs/operators';
import { plainToInstance, instanceToPlain } from 'class-transformer';

class ProfileService {
  public getProfile(): Observable<User> {
    return apiService.get<User>('/profile').pipe(map((response) => plainToInstance(User, response)));
  }

  public updateProfile(user: User): Observable<User> {
    return apiService.put<void>('/profile', instanceToPlain(user)).pipe(map(() => user));
  }
}

export const profileService = new ProfileService();
