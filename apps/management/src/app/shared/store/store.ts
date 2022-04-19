import { createStore } from 'modules/store';
import { Store } from 'redux';
import { rootEpic } from './epics';
import { rootReducer } from './reducer';
import { storeRef } from './store-ref';

export function initStore(): Store<ReturnType<typeof rootReducer>> {
  return createStore(rootReducer, rootEpic, storeRef);
}
