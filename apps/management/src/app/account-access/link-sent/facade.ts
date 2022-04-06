import { appNavigationService } from '@shared/navigation';

class LinkSentScreenFacade {
  public navigateToLogin(): void {
    appNavigationService.navigate('Login');
  }
}

export const linkSentScreenFacade = new LinkSentScreenFacade();
