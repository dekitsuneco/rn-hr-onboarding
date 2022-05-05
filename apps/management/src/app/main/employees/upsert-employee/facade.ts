import { storeRef } from '@store';
import { useSelector } from 'react-redux';
import { EmployeeForm } from './shared/forms/employee';
import { UpsertEmployeeScreenActions } from './shared/store';
import { UpsertEmployeeScreenSelectors } from './shared/store/selectors';

class UpsertEmployeeFacade {
  public get isCreating(): boolean {
    return useSelector(UpsertEmployeeScreenSelectors.isCreating);
  }

  public createUser(user: EmployeeForm): void {
    storeRef.dispatch(UpsertEmployeeScreenActions.createUser(user));
  }
}

export const upsertEmployeeFacade = new UpsertEmployeeFacade();
