import { UpsertEmployeeScreenState } from './state';
import { createReducer } from 'deox';
import { UpsertEmployeeScreenActions } from './actions';

const initialState = new UpsertEmployeeScreenState();

export const upsertEmployeeScreenReducer = createReducer(initialState, (handleAction) => [
  handleAction(UpsertEmployeeScreenActions.createUser, (state) => ({
    ...state,
    isCreating: true
  })),

  handleAction(UpsertEmployeeScreenActions.updateUser, (state) => ({
    ...state,
    isUpdating: true
  })),

  handleAction(UpsertEmployeeScreenActions.createUserSuccess, (state) => ({
    ...state,
    isCreating: false
  })),

  handleAction(UpsertEmployeeScreenActions.createUserFailure, (state, { payload }) => ({
    ...state,
    isCreating: false,
    createErrorMessage: payload.message
  })),

  handleAction(UpsertEmployeeScreenActions.updateUserSuccess, (state) => ({
    ...state,
    isUpdating: false
  })),

  handleAction(UpsertEmployeeScreenActions.updateUserFailure, (state, { payload }) => ({
    ...state,
    isUpdating: false,
    updateErrorMessage: payload.message
  }))
]);
