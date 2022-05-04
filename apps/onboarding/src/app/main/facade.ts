import { ProfileSelectors } from 'features/profile';
import { useSelector } from 'react-redux';

class MainFacade {
  public get isFetching(): boolean {
    return useSelector(ProfileSelectors.isFetching);
  }
}

export const mainFacade = new MainFacade();
