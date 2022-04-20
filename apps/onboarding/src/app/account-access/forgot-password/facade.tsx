import { appNavigationService } from 'features/navigation';

class ForgotPasswordFacade {
  public init(): void {
    // TODO: implement this
  }

  public goBack(): void {
    appNavigationService.goBack();
  }
}

export const forgotPasswordFacade = new ForgotPasswordFacade();
