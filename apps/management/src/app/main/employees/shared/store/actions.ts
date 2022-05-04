import { actionWithPayload } from '@store';
import { BaseListedEntityActions } from 'features/base-listed-entity-store/store';
import { User } from 'features/data';
import { EmployeesScreenState } from './state';

class EmployeesScreenActions extends BaseListedEntityActions<EmployeesScreenState> {
  public createUser = actionWithPayload<User>(
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
