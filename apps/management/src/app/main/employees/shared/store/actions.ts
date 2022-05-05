import { actionWithPayload } from '@store';
import { BaseListedEntityActions } from 'features/base-listed-entity-store/store';
import { EmployeeForm } from '../../upsert-employee/shared/forms/employee';
import { EmployeesScreenState } from './state';

class EmployeesScreenActions extends BaseListedEntityActions<EmployeesScreenState> {
  public createUser = actionWithPayload<EmployeeForm>(
    '[Employees Screen] Create user'
  );

  constructor() {
    super(
      'Employees Screen',
      'user'
    );
  }
}

export const employeesScreenActions = new EmployeesScreenActions();
