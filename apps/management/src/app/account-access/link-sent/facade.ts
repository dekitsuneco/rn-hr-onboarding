import { appNavigationService } from 'modules/navigation';

class LinkSentScreenFacade {
  public navigateToLogin(): void {
    appNavigationService.navigate('Login');
  }
}

export const linkSentScreenFacade = new LinkSentScreenFacade();
