import { appNavigationService } from 'modules/navigation';

class AppHeaderFacade {
  public init(): void {
    //TODO: init
  }

  public canGoBack(): boolean {
    return appNavigationService.canGoBack();
  }

  public goBack(): void {
    appNavigationService.goBack();
  }
}

export const appHeaderFacade = new AppHeaderFacade();
