import { createReducer } from 'deox';
import { AuthActions } from './actions';
import { AuthState } from './state';

const initialState = new AuthState();

export const authReducer = createReducer(initialState, (handleAction) => [
  handleAction(AuthActions.clearToken, (state) => ({
    ...state,
    token: null
  })),
  handleAction(AuthActions.saveToken, (state, { payload }) => ({
    ...state,
    token: payload.token
  })),
  handleAction(AuthActions.tokenLoaded, (state) => ({
    ...state,
    isTokenLoaded: true
  })),
  handleAction(AuthActions.authorize, (state) => ({
    ...state,
    isAuthorizing: true
  })),
  handleAction(AuthActions.authorizeSuccess, (state) => ({
    ...state,
    isAuthorizing: false
  })),
  handleAction(AuthActions.authorizeFailure, (state, { payload }) => ({
    ...state,
    isAuthorizing: false,
    errorMessage: payload.message
  }))
]);
