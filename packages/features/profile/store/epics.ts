import { Epics } from 'modules/store';
import { ofType } from 'deox';
import { AuthActions, AuthSelectors } from '../../auth';
import { catchError, exhaustMap, map, filter, withLatestFrom } from 'rxjs/operators';
import { profileService } from '../service';
import { ProfileActions } from './actions';
import { of } from 'rxjs';
import { ProfileSelectors } from './selectors';

export const profileEpics: Epics = {
  saveToken: (action$, state$) => action$.pipe(
    ofType(AuthActions.saveToken),
    withLatestFrom(state$),
    filter(([_, state]) => !ProfileSelectors.profile(state)),
    map(() => ProfileActions.fetchProfile())
  ),

  fetchProfile: (action$) => action$.pipe(
    ofType(ProfileActions.fetchProfile),
    exhaustMap(() => profileService.getProfile().pipe(
      map((response) => ProfileActions.fetchProfileSuccess(response)),
      catchError((error) => of(ProfileActions.fetchProfileFailure(error)))
    ))
  ),

  unauthorize: (action$) => action$.pipe(
    ofType(AuthActions.unauthorize),
    map(() => ProfileActions.clearProfile())
  ),

  updateProfile: (action$, state$) => action$.pipe(
    ofType(ProfileActions.updateProfile),
    filter(() => AuthSelectors.isAuthenticated(state$.value)),
    exhaustMap((action) => profileService.updateProfile(action.payload).pipe(
      map((user) => ProfileActions.updateProfileSuccess(user)),
      catchError((error) => of(ProfileActions.updateProfileFailure(error)))
    ))
  )
};
