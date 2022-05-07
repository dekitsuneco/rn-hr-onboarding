import { createReducer } from 'deox';
import { NewScriptScreenActions } from './actions';
import { NewScriptScreenState } from './state';

const initialState = new NewScriptScreenState();

export const newScriptScreenReducer = createReducer(initialState, (handleAction) => [
  handleAction(NewScriptScreenActions.createFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload.message
  }))
]);
