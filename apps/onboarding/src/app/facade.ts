import { AppActions, storeRef } from '@store';
import { AuthSelectors } from 'features/auth';
import { appNavigationService } from 'features/navigation';
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

  public get canGoBack(): boolean {
    return appNavigationService.canGoBack;
  }

  public navigate(screen: string): void {
    appNavigationService.navigate(screen);
  }

  public goBack(): void {
    appNavigationService.goBack();
  }
}

export const appFacade = new AppFacade();
