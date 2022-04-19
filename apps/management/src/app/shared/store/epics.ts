import { authEpics } from 'features/auth/store/epics';
import { appStorageEpics } from 'features/storage/store/epics';
import { values } from 'lodash';
import { combineEpics, Epic } from 'redux-observable';

export const rootEpic = combineEpics(...values<Epic>(appStorageEpics), ...values<Epic>(authEpics));
