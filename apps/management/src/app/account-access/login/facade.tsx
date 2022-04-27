import { storeRef } from '@store';
import { AuthActions, AuthCredentials, AuthSelectors } from 'features/auth';
import { appNavigationService } from 'features/navigation';
import { useSelector } from 'react-redux';

class LoginScreenFacade {
  public authorize(credentials: AuthCredentials): void {
    storeRef.dispatch(AuthActions.authorize(credentials));
  }

  public navigateToForgotPassword(): void {
    appNavigationService.navigate('ForgotPassword');
  }

  public get isSubmitting(): boolean {
    return useSelector(AuthSelectors.isAuthorizing);
  }

  public get errorMessage(): string {
    return useSelector(AuthSelectors.errorMessage);
  }
}

export const loginScreenFacade = new LoginScreenFacade();
