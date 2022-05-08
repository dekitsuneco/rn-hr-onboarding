import { createReducer } from 'deox';
import { ScriptsListScreenState } from './state';
import { baseListedEntityStoreReducer } from 'features/base-listed-entity-store/store';
import { scriptsListScreenActions } from './actions';

const initialState = new ScriptsListScreenState();

export const scriptsListScreenReducer = createReducer(initialState, (handleAction) => baseListedEntityStoreReducer(initialState, scriptsListScreenActions, handleAction));
