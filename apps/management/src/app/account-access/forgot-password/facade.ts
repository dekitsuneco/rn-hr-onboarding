import { appNavigationService } from 'modules/navigation';

class ForgotPasswordScreenFacade {
  public goBack(): void {
    appNavigationService.goBack();
  }

  public navigateToLinkSent(): void {
    appNavigationService.navigate('LinkSent');
  }
}

export const forgotPasswordScreenFacade = new ForgotPasswordScreenFacade();
