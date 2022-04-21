import { Epics as CommonEpics } from 'modules/store/types';
import { AppState } from './state';

export type Epics = CommonEpics<AppState>;
