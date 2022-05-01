import { Observable } from 'rxjs';
import { apiService } from '../api';
import { User } from '../data';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';

class ProfileService {
  public getProfile(): Observable<User> {
    return apiService.get<User>('/profile').pipe(map((response) => plainToInstance(User, response)));
  }
}

export const profileService = new ProfileService();
