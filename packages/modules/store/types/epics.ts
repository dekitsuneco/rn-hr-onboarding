import { AnyAction } from 'deox';
import { Epic } from 'redux-observable';

export type Epics<TState = any> = {
  [key: string]: Epic<
    AnyAction,
    AnyAction,
    TState,
    {
      useDispatch: () => (action: AnyAction) => void;
      useGetState: () => () => TState;
    }
  >;
};
