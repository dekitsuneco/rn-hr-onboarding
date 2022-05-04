import { combineReducers } from 'redux';
import { authReducer } from 'features/auth';
import { profileReducer } from 'features/profile';
import { entityStoreReducer } from 'features/data/base-entity/store/reducer';
import { employeeScreenReducer } from '@app/main/employees/shared/store/reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  entityStore: entityStoreReducer,
  employeesScreen: employeeScreenReducer,
  profile: profileReducer
});
