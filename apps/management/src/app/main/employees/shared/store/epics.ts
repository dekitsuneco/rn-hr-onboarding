import { AppActions, Epics } from '@store';
import { baseListedEntityEpics } from 'features/base-listed-entity-store/store';
import { userService } from 'features/data';
import { employeesScreenActions } from './actions';
import { employeesScreenSelectors } from './selectors';
import { ofType } from 'deox';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import { appNavigationService } from 'features/navigation';

export const employeesScreenEpics: Epics = {
  ...baseListedEntityEpics(employeesScreenActions, employeesScreenSelectors, userService),

  createUser: (action$) => action$.pipe(
    ofType(employeesScreenActions.createUser),
    exhaustMap((action) => userService.create(action.payload).pipe(
      tap((response) => console.log(response)),
      tap(() => appNavigationService.goBack()),
      map(() => AppActions.noop()),
      catchError(() => of(AppActions.noop()))
    ))
  )
};
