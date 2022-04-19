import { AppActions, storeRef } from '@store';
import { AuthSelectors } from 'features/auth';
import { useSelector } from 'react-redux';

class AppFacade {
  public get isAuthenticated(): boolean {
    return useSelector(AuthSelectors.isAuthenticated);
  }

  public get isTokenLoaded(): boolean {
    return useSelector(AuthSelectors.isTokenLoaded);
  }

  public init(): void {
    storeRef.dispatch(AppActions.init());
  }
}

export const appFacade = new AppFacade();
