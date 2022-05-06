import { ofType } from 'deox';
import { Script, scriptService } from 'features/data';
import { appNavigationService } from 'features/navigation';
import { AppActions, Epics } from 'modules/store';
import { of } from 'rxjs';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { UpsertScriptFormActions } from './actions';

export const upsertScriptFormEpics: Epics = {
  create: (action$) => action$.pipe(
    ofType(UpsertScriptFormActions.createScript),
    exhaustMap((action) => scriptService.create(new Script(action.payload)).pipe(
      map(() => UpsertScriptFormActions.createSuccess()),
      catchError((error) => of(UpsertScriptFormActions.createFailure(error)))
    ))
  ),

  createSuccess: (action$) => action$.pipe(
    ofType(UpsertScriptFormActions.createSuccess),
    tap(() => appNavigationService.goBack()),
    map(() => AppActions.noop())
  )
};
