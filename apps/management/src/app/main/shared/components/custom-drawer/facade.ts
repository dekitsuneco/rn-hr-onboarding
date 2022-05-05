import { storeRef } from '@store';
import { AuthActions } from 'features/auth';
import { User } from 'features/data';
import { appNavigationService } from 'features/navigation';
import { ProfileSelectors } from 'features/profile';
import { useSelector } from 'react-redux';

class CustomDrawerFacade {
  public get profile(): User {
    return useSelector(ProfileSelectors.profile);
  }

  public navigateToScreen(screen: string): void {
    appNavigationService.navigate(screen);
  }

  public isActiveScreen(screen: string): boolean {
    const currentScreen = appNavigationService?.currentRoute?.name;

    return currentScreen?.includes(screen);
  }

  public unauthorize(): void {
    storeRef.dispatch(AuthActions.unauthorize({}));
  }
}

export const customDrawerFacade = new CustomDrawerFacade();
