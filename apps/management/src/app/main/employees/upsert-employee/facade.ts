import { storeRef } from '@store';
import { employeesScreenActions } from '../shared/store/actions';
import { EmployeeForm } from './shared/forms/employee';

class UpsertEmployeeFacade {
  public createUser(user: EmployeeForm): void {
    storeRef.dispatch(employeesScreenActions.createUser(user));
  }
}

export const upsertEmployeeFacade = new UpsertEmployeeFacade();
