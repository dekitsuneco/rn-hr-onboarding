import { User } from '../../data';

export class ProfileState {
  public profile: User;
  public isFetching: boolean;
  public isUpdating: boolean;

  constructor() {
    this.profile = null;
  }
}
