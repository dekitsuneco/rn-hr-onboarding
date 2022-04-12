import { appNavigationService } from 'modules/navigation';

class OnboardingFacade {
  public init(): void {
    // TODO: implement this
  }

  public navigate(screen: string): void {
    appNavigationService.navigate(screen);
  }
}

export const onboardingFacade = new OnboardingFacade();
