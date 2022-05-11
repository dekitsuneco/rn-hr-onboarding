import { EntityService } from '../base-entity/service';
import { User } from './models';

export class UserService extends EntityService<User> {
  public delete = this.notImplementedMethod('update');

  constructor() {
    super({
      endpoint: '/users',
      entityName: 'user'
    });
  }
}

export const userService = new UserService();
