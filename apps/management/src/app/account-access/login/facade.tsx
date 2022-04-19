import { storeRef } from '@store';
import { AuthActions, AuthCredentials } from 'features/auth';
import { appNavigationService } from 'modules/navigation';

class LoginScreenFacade {
  public authorize(credentials: AuthCredentials): void {
    storeRef.dispatch(AuthActions.authorize(credentials));
  }

  public navigateToForgotPassword(): void {
    appNavigationService.navigate('ForgotPassword');
  }
}

export const loginScreenFacade = new LoginScreenFacade();
