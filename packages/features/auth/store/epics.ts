import { ofType } from 'deox';
import { appNameInterceptor, tokenInterceptor, unauthorizedInterceptor } from 'modules/api/interceptors';
import { AppActions } from 'modules/store';
import { Epics } from 'modules/store/types';
import { of, tap } from 'rxjs';
import { catchError, exhaustMap, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { apiService } from '../../api';
import { commonAppsConfig } from '../../constants';
import { appStorageService } from '../../storage';
import { authService } from '../service';
import { AuthActions } from './actions';
import { AuthSelectors } from './selectors';

export const authEpics: Epics = {
  onInit: (action$, _, { useGetState, useDispatch }) => action$.pipe(
    ofType(AppActions.init),
    tap(() => {
      const getState = useGetState();
      const dispatch = useDispatch();
      const getToken = (): string => AuthSelectors.token(getState());

      apiService.useInterceptors({
        request: [
          [tokenInterceptor({ getToken, ignoredEndpoints: commonAppsConfig.api.publicEndpoints })],
          [appNameInterceptor()]
        ],
        response: [
          [
            undefined,
            unauthorizedInterceptor({
              ignoredEndpoints: commonAppsConfig.api.publicEndpoints,
              onError: () => dispatch(AuthActions.unauthorize({ keepInterruptedNavigation: true }))
            })
          ]
        ]
      });
    }),
    switchMap(() => appStorageService.token.get()),
    map((token) => AuthActions.saveToken({ token }))
  ),

  saveToken: (action$, state$) => action$.pipe(
    ofType(AuthActions.saveToken),
    withLatestFrom(state$),
    filter(([_, state]) => !AuthSelectors.isTokenLoaded(state)),
    map(() => AuthActions.tokenLoaded())
  ),

  authorize: (action$) => action$.pipe(
    ofType(AuthActions.authorize),
    exhaustMap((action) => authService.authorize({ ...action.payload }).pipe(
      map((response) => AuthActions.authorizeSuccess(response)),
      catchError((error) => of(AuthActions.authorizeFailure(error)))
    ))
  ),

  authorizeSuccess: (action$) => action$.pipe(
    ofType(AuthActions.authorizeSuccess),
    map(({ payload }) => AuthActions.saveToken({ token: payload.token }))
  ),

  unauthorize: (action$, state$) => action$.pipe(
    ofType(AuthActions.unauthorize),
    withLatestFrom(state$),
    map(() => AuthActions.clearToken())
  )
};
