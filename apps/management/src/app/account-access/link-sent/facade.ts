import { appNavigationService } from 'features/navigation';

class LinkSentScreenFacade {
  public popToTop(): void {
    appNavigationService.popToTop();
  }
}

export const linkSentScreenFacade = new LinkSentScreenFacade();
