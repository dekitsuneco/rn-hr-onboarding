import produce from 'immer';
import { merge } from 'lodash';

export const immutableMerge = <TInitial, TPatch = Partial<TInitial>>(
  initial: TInitial,
  patch: TPatch
): TInitial & TPatch => produce(initial, (draft) => merge(draft, patch)) as TInitial & TPatch;
