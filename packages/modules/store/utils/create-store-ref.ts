import { STORE_REF_TOKEN } from '../constants';
import { Store } from 'redux-starter-kit';
import { Container } from 'typedi';

export function createStoreRef<TState>(
  initialValue: Pick<Store<TState>, 'dispatch' | 'getState'> = {
    dispatch: () => {
      throw new Error('Unable to dispatch action: store reference is not initialized!');
    },
    getState: () => {
      throw new Error('Unable to get state: store reference is not initialized!');
    }
  }
): typeof initialValue {
  Container.set(STORE_REF_TOKEN, initialValue);

  return initialValue;
}
