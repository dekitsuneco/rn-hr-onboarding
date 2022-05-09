import { UpsertEmployeeScreenState } from './state';
import { createReducer } from 'deox';
import { UpsertEmployeeScreenActions } from './actions';

const initialState = new UpsertEmployeeScreenState();

export const upsertEmployeeScreenReducer = createReducer(initialState, (handleAction) => [
  handleAction(UpsertEmployeeScreenActions.createUser, (state) => ({
    ...state,
    isCreating: true
  })),

  handleAction(UpsertEmployeeScreenActions.createUserSuccess, (state) => ({
    ...state,
    isCreating: false
  })),

  handleAction(UpsertEmployeeScreenActions.createUserFailure, (state, { payload }) => ({
    ...state,
    isCreating: false,
    errorMessage: payload.message
  }))
]);