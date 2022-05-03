import { Epics } from 'modules/store';
import { ofType } from 'deox';
import { AuthActions } from '../../auth';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { profileService } from '../service';
import { ProfileActions } from './actions';
import { of } from 'rxjs';

export const profileEpics: Epics = {
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
  )
};
