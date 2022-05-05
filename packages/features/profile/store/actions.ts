import { action, actionWithPayload } from 'modules/store';
import { User } from '../../data';
import { AxiosError } from 'axios';

export class ProfileActions {
  public static fetchProfile = action(
    '[Profile] Fetch Profile'
  );

  public static fetchProfileSuccess = actionWithPayload<User>(
    '[Profile] Fetch Profile Success'
  );

  public static fetchProfileFailure = actionWithPayload<AxiosError>(
    '[Profile] Fetch Profile Failure'
  );

  public static updateProfile = actionWithPayload<User>(
    '[Profile] Update Profile'
  );

  public static updateProfileSuccess = actionWithPayload<User>(
    '[Profile] Update Profile Success'
  );

  public static updateProfileFailure = actionWithPayload<AxiosError>(
    '[Profile] Update Profile Failure'
  );

  public static clearProfile = action(
    '[Profile] Clear profile'
  );
}
