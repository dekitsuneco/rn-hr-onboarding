import { createReducer } from 'deox';
import { NewScriptScreenActions } from './actions';
import { NewScriptScreenState } from './state';

const initialState = new NewScriptScreenState();

export const newScriptScreenReducer = createReducer(initialState, (handleAction) => [
  handleAction(NewScriptScreenActions.createScript, (state) => ({
    ...state,
    isSubmitting: true
  })),

  handleAction(NewScriptScreenActions.createSuccess, (state) => ({
    ...state,
    isSubmitting: false
  })),

  handleAction(NewScriptScreenActions.createFailure, (state, { payload }) => ({
    ...state,
    errorMessage: payload.message,
    isSubmitting: false
  }))
]);
