import { storeRef } from '@store';
import { AuthActions, AuthCredentials, AuthSelectors } from 'features/auth';
import { appNavigationService } from 'features/navigation';
import { useSelector } from 'react-redux';

class LoginFacade {
  public init(): void {
    // TODO: implement this
  }

  public authorize(credentials: AuthCredentials): void {
    storeRef.dispatch(AuthActions.authorize(credentials));
  }

  public navigate(screen: string): void {
    appNavigationService.navigate(screen);
  }

  public get isSubmitting(): boolean {
    return useSelector(AuthSelectors.isAuthorizing);
  }
}

export const loginFacade = new LoginFacade();
