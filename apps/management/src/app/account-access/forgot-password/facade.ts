import { appNavigationService } from 'features/navigation';

class ForgotPasswordScreenFacade {
  public goBack(): void {
    appNavigationService.goBack();
  }

  public navigateToLinkSent(): void {
    appNavigationService.navigate('LinkSent');
  }
}

export const forgotPasswordScreenFacade = new ForgotPasswordScreenFacade();
