import { createStoreRef } from 'modules/store';
import { AppState } from './types';

export const storeRef = createStoreRef<AppState>();
