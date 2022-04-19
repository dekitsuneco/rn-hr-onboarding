import { storeRef } from '@store';
import { AuthActions } from 'features/auth';
import { appNavigationService } from 'modules/navigation';

class CustomDrawerFacade {
  public navigateToScreen(screen: string): void {
    appNavigationService.navigate(screen);
  }

  public isActiveScreen(screen: string): boolean {
    const currentScreen = appNavigationService?.currentRoute?.name;

    return currentScreen === screen;
  }

  public logout(): void {
    storeRef.dispatch(AuthActions.unauthorize({}));
  }
}

export const customDrawerFacade = new CustomDrawerFacade();
