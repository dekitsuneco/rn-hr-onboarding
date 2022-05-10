import { authEpics } from 'features/auth/store/epics';
import { appStorageEpics } from 'features/storage/store/epics';
import { appNavigationEpics } from 'features/navigation/store';
import { values } from 'lodash';
import { combineEpics, Epic } from 'redux-observable';
import { profileEpics } from 'features/profile';
import { employeesScreenEpics } from '@app/main/employees/shared/store';
import { upsertEmployeesScreenEpics } from '@app/main/employees/upsert-employee/shared/store/epics';
import { newScriptScreenEpics } from '@app/main/scripts/new-script/shared/store';
import { scriptsListScreenEpics } from '@app/main/scripts/shared/store';

export const rootEpic = combineEpics(
  ...values<Epic>(appStorageEpics),
  ...values<Epic>(authEpics),
  ...values<Epic>(appNavigationEpics),
  ...values<Epic>(profileEpics),
  ...values<Epic>(employeesScreenEpics),
  ...values<Epic>(upsertEmployeesScreenEpics),
  ...values<Epic>(newScriptScreenEpics),
  ...values<Epic>(scriptsListScreenEpics)
);
