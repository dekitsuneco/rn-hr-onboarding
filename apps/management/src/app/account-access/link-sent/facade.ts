import { appNavigationService } from 'modules/navigation';

class LinkSentScreenFacade {
  public popToTop(): void {
    appNavigationService.popToTop();
  }
}

export const linkSentScreenFacade = new LinkSentScreenFacade();
