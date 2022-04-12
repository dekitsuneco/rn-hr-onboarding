import { appNavigationService } from 'modules/navigation';

class LoginFacade {
  public init(): void {
    // TODO: implement this
  }

  public navigate(screen: string): void {
    appNavigationService.navigate(screen);
  }
}

export const loginFacade = new LoginFacade();
