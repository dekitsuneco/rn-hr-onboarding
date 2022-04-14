import { AnyAction } from 'deox';
import { Reducer } from 'deox/dist/types';
import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, Epic } from 'redux-observable';
import { Store } from 'redux-starter-kit';

export function createStore<TState>(
  rootReducer: Reducer<TState, AnyAction>,
  rootEpic: Epic,
  storeRef?: Partial<Store<TState>>
): Store<ReturnType<typeof rootReducer>> {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      useDispatch: () => store.dispatch,
      useGetState: () => store.getState
    }
  });

  const store = createReduxStore(rootReducer, composeWithDevTools(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  if (storeRef) {
    storeRef.dispatch = store.dispatch;
    storeRef.getState = store.getState;
  }

  return store;
}
