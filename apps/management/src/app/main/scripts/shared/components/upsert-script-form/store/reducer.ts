import { createReducer } from 'deox';
import { UpsertScriptFormActions } from './actions';
import { UpsertScriptFormState } from './state';

const initialState = new UpsertScriptFormState();

export const upsertScriptFromReducer = createReducer(initialState, (handleAction) => [
  handleAction(UpsertScriptFormActions.createFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload.message
  }))
]);
