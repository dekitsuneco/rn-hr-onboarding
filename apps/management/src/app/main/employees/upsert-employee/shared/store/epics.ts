import { ofType } from 'deox';
import { User, userService } from 'features/data';
import { appNavigationService } from 'features/navigation';
import { Epics } from 'modules/store';
import { exhaustMap, map, tap, catchError } from 'rxjs/operators';
import { UpsertEmployeeScreenActions } from './actions';
import { of } from 'rxjs';

export const upsertEmployeesScreenEpics: Epics = {
  createUser: (action$) => action$.pipe(
    ofType(UpsertEmployeeScreenActions.createUser),
    exhaustMap((action) => userService.create(new User(action.payload)).pipe(
      map(() => UpsertEmployeeScreenActions.createSuccess()),
      tap(() => appNavigationService.goBack()),
      catchError((error) => of(UpsertEmployeeScreenActions.createFailure(error)))
    ))
  )
};
