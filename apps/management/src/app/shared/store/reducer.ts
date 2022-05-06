import { combineReducers } from 'redux';
import { authReducer } from 'features/auth';
import { profileReducer } from 'features/profile';
import { entityStoreReducer } from 'features/data/base-entity/store/reducer';
import { employeeScreenReducer } from '@app/main/employees/shared/store';
import { upsertScriptFromReducer } from '@app/main/scripts/shared/components/upsert-script-form/store';

export const rootReducer = combineReducers({
  auth: authReducer,
  entityStore: entityStoreReducer,
  employeesScreen: employeeScreenReducer,
  profile: profileReducer,
  upsertScriptForm: upsertScriptFromReducer
});
