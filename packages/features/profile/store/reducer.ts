import { ProfileState } from './state';
import { createReducer } from 'deox';
import { ProfileActions } from './actions';
import { AuthActions } from '../../auth';

const initialState = new ProfileState();

export const profileReducer = createReducer(initialState, (handleAction) => [
  handleAction(ProfileActions.fetchProfile, (state) => ({
    ...state,
    isFetching: true
  })),
  handleAction(ProfileActions.fetchProfileSuccess, (state, { payload }) => ({
    ...state,
    profile: payload,
    isFetching: false
  })),
  handleAction(ProfileActions.fetchProfileFailure, (state) => ({
    ...state,
    isFetching: false
  })),
  handleAction(ProfileActions.updateProfile, (state) => ({
    ...state,
    isUpdating: true
  })),
  handleAction(ProfileActions.updateProfileSuccess, (state, { payload }) => ({
    ...state,
    profile: payload,
    isUpdating: false
  })),
  handleAction(ProfileActions.updateProfileFailure, (state) => ({
    ...state,
    isUpdating: false
  })),
  handleAction(AuthActions.unauthorize, (state) => ({
    ...state,
    profile: null
  }))
]);
