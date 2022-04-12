import { appNavigationService } from 'modules/navigation';

class ForgotPasswordFacade {
  public init(): void {
    // TODO: implement this
  }

  public goBack(): void {
    appNavigationService.goBack();
  }
}

export const forgotPasswordFacade = new ForgotPasswordFacade();
