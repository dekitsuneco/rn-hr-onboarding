import { ofType } from 'deox';
import { Epics } from 'modules/store/types';
import { appNavigationService } from '..';
import { AuthActions } from '../../auth';
import { tap, delay, map } from 'rxjs';
import { AppActions } from 'modules/store';

export const appNavigationEpics: Epics = {
  authorizeSuccessNavigation: (action$) => action$.pipe(
    ofType(AuthActions.authorizeSuccess),
    delay(100),
    tap(() => appNavigationService.resetToRoute('Main')),
    map(() => AppActions.noop())
  ),

  unauthorizeNavigation: (action$) => action$.pipe(
    ofType(AuthActions.unauthorize),
    delay(100),
    tap(() => appNavigationService.resetToRoute('AccountAccess')),
    map(() => AppActions.noop())
  )
};
