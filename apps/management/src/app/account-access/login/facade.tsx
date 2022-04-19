import { appNavigationService } from 'modules/navigation';

class LoginScreenFacade {
  public navigateToMain(): void {
    appNavigationService.resetToRoute('Main');
  }

  public navigateToForgotPassword(): void {
    appNavigationService.navigate('ForgotPassword');
  }
}

export const loginScreenFacade = new LoginScreenFacade();
