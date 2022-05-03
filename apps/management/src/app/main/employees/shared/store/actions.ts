import { BaseListedEntityActions } from 'features/base-listed-entity-store/store';
import { EmployeesScreenState } from './state';

class EmployeesScreenActions extends BaseListedEntityActions<EmployeesScreenState> {
  constructor() {
    super(
      'Employees Screen',
      'user'
    );
  }
}

export const employeesScreenActions = new EmployeesScreenActions();
