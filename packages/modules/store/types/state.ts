import { initStore } from '../store';

export type AppState = ReturnType<ReturnType<typeof initStore>['getState']>;
