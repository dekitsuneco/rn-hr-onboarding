import { appNavigationService } from 'modules/navigation';

class CustomDrawerFacade {
  public navigateToScreen(screen: string): void {
    appNavigationService.navigate(screen);
  }

  public isActiveScreen(screen: string): boolean {
    const currentScreen = appNavigationService.currentRoute.name;

    return currentScreen === screen;
  }

  public logout(): void {
    appNavigationService.popToTop();
  }
}

export const customDrawerFacade = new CustomDrawerFacade();
