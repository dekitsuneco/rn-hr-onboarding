import { appNavigationService } from '@shared/navigation';

class LoginScreenFacade {
  public navigateToMain(): void {
    appNavigationService.navigate('Main');
  }

  public navigateToForgotPassword(): void {
    appNavigationService.navigate('ForgotPassword');
  }
}

export const loginScreenFacade = new LoginScreenFacade();
