import { AppState } from '@store';
import { BaseListedEntitySelectors } from 'features/base-listed-entity-store/store';
import { EmployeesScreenState } from './state';

const selectFeature = (state: AppState): EmployeesScreenState => state.employeesScreen;

class EmployeesScreenSelectors extends BaseListedEntitySelectors {
  constructor() {
    super(
      selectFeature,
      'user'
    );
  }
}

export const employeesScreenSelectors = new EmployeesScreenSelectors();
