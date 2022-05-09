import { AppState } from '@store';
import { BaseListedEntitySelectors } from 'features/base-listed-entity-store/store';
import { User } from 'features/data';
import { EmployeesScreenState } from './state';

const selectFeature = (state: AppState): EmployeesScreenState => state.employeesScreen;

class EmployeesScreenSelectors extends BaseListedEntitySelectors<User, EmployeesScreenState> {
  constructor() {
    super(
      selectFeature,
      'user'
    );
  }
}

export const employeesScreenSelectors = new EmployeesScreenSelectors();
