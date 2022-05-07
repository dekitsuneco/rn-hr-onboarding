import { ofType } from 'deox';
import { Script, scriptService } from 'features/data';
import { appNavigationService } from 'features/navigation';
import { AppActions, Epics } from 'modules/store';
import { of } from 'rxjs';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { NewScriptScreenActions } from './actions';

export const newScriptScreenEpics: Epics = {
  create: (action$) => action$.pipe(
    ofType(NewScriptScreenActions.createScript),
    exhaustMap((action) => scriptService.create(new Script(action.payload)).pipe(
      map(() => NewScriptScreenActions.createSuccess()),
      catchError((error) => of(NewScriptScreenActions.createFailure(error)))
    ))
  ),

  createSuccess: (action$) => action$.pipe(
    ofType(NewScriptScreenActions.createSuccess),
    tap(() => appNavigationService.goBack()),
    map(() => AppActions.noop())
  )
};
