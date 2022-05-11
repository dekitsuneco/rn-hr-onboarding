import { ofType } from 'deox';
import { User, userService } from 'features/data';
import { appNavigationService } from 'features/navigation';
import { Epics } from 'modules/store';
import { exhaustMap, map, tap, catchError } from 'rxjs/operators';
import { UpsertEmployeeScreenActions } from './actions';
import { of } from 'rxjs';
import { employeesScreenActions } from '@app/main/employees/shared/store';

export const upsertEmployeesScreenEpics: Epics = {
  createUser: (action$) => action$.pipe(
    ofType(UpsertEmployeeScreenActions.createUser),
    exhaustMap((action) => userService.create(new User(action.payload)).pipe(
      map(() => UpsertEmployeeScreenActions.createUserSuccess()),
      catchError((error) => of(UpsertEmployeeScreenActions.createUserFailure(error)))
    ))
  ),

  createUserSuccess: (action$) => action$.pipe(
    ofType(UpsertEmployeeScreenActions.createUserSuccess),
    tap(() => appNavigationService.goBack()),
    map(() => employeesScreenActions.loadItems({ page: 1 }))
  ),

  updateUser: (action$) => action$.pipe(
    ofType(UpsertEmployeeScreenActions.updateUser),
    exhaustMap((action) => userService.update(new User(action.payload)).pipe(
      map(() => UpsertEmployeeScreenActions.updateUserSuccess()),
      catchError((error) => of(UpsertEmployeeScreenActions.updateUserFailure(error)))
    ))
  )
};
