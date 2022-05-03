import { BaseListedEntityFacade } from 'features/base-listed-entity-store';
import { User } from 'features/data';
import { employeesScreenActions } from './shared/store/actions';
import { employeesScreenSelectors } from './shared/store/selectors';
import { EmployeesScreenState } from './shared/store/state';

class EmployeesScreenFacade extends BaseListedEntityFacade<
  EmployeesScreenState,
  User,
  typeof employeesScreenActions,
  typeof employeesScreenSelectors
> {
  constructor() {
    super(employeesScreenActions, employeesScreenSelectors);
  }
}

export const employeesScreenFacade = new EmployeesScreenFacade();
