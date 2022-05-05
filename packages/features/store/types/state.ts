import { AuthState } from '../../auth';
import { ProfileState } from '../../profile/store/state';

export type CommonAppsState = {
  auth: AuthState;
  profile: ProfileState;
};
