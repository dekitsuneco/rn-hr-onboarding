import { AuthState } from './state';
import { createSelector } from 'reselect';
import { CommonAppsState } from '../../store';

const selectFeature = (state: CommonAppsState): AuthState => state.auth;

export class AuthSelectors {
  public static token = createSelector(
    selectFeature,
    (state) => state.token
  );

  public static isAuthenticated = createSelector(
    selectFeature,
    (state) => !!state.token
  );

  public static isTokenLoaded = createSelector(
    selectFeature,
    (state) => state.isTokenLoaded
  );

  public static isAuthorizing = createSelector(
    selectFeature,
    (state) => state.isAuthorizing
  );

  public static errorMessage = createSelector(
    selectFeature,
    (state) => state.errorMessage
  );
}
