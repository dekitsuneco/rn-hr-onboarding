import { storeRef } from '@store';
import { AuthActions } from 'features/auth';

class ProfileFacade {
  public init(): void {
    // TODO: implement this
  }

  public unauthorize(): void {
    storeRef.dispatch(AuthActions.unauthorize({}));
  }
}

export const profileFacade = new ProfileFacade();
