import { createReducer } from 'deox';
import { EmployeesScreenState } from './state';
import { baseListedEntityStoreReducer } from 'features/base-listed-entity-store/store';
import { employeesScreenActions } from './actions';

const initialState = new EmployeesScreenState();

export const employeeScreenReducer = createReducer(initialState, (handleAction) => baseListedEntityStoreReducer(initialState, employeesScreenActions, handleAction));
