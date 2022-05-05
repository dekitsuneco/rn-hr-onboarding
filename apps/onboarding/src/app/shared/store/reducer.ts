import { combineReducers } from 'redux';
import { authReducer } from 'features/auth';
import { profileReducer } from 'features/profile';

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
});
