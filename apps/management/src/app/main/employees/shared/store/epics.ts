import { AppActions, Epics } from '@store';
import { baseListedEntityEpics } from 'features/base-listed-entity-store/store';
import { User, userService } from 'features/data';
import { employeesScreenActions } from './actions';
import { employeesScreenSelectors } from './selectors';
import { ofType } from 'deox';
import { exhaustMap, map } from 'rxjs/operators';
import { tap } from 'rxjs';
import { appNavigationService } from 'features/navigation';

export const employeesScreenEpics: Epics = {
  ...baseListedEntityEpics(employeesScreenActions, employeesScreenSelectors, userService),

  createUser: (action$) => action$.pipe(
    ofType(employeesScreenActions.createUser),
    exhaustMap((action) => userService.create(new User(action.payload)).pipe(
      tap(() => appNavigationService.goBack()),
      map(() => AppActions.noop())
    ))
  )
};
