import { combineReducers } from 'redux';
import { authReducer } from 'features/auth';
import { profileReducer } from 'features/profile';
import { entityStoreReducer } from 'features/data/base-entity/store/reducer';
import { employeeScreenReducer } from '@app/main/employees/shared/store';
import { upsertEmployeeScreenReducer } from '@app/main/employees/upsert-employee/shared/store';
import { newScriptScreenReducer } from '@app/main/scripts/new-script/shared/store';

export const rootReducer = combineReducers({
  auth: authReducer,
  entityStore: entityStoreReducer,
  employeesScreen: employeeScreenReducer,
  profile: profileReducer,
  upsertEmployeeScreen: upsertEmployeeScreenReducer,
  newScriptScreen: newScriptScreenReducer
});
