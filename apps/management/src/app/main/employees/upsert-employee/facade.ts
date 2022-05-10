import { storeRef } from '@store';
import { useSelector } from 'react-redux';
import { EmployeeForm } from './shared/forms/employee';
import { UpsertEmployeeScreenActions } from './shared/store';
import { UpsertEmployeeScreenSelectors } from './shared/store/selectors';

class UpsertEmployeeFacade {
  public get isCreating(): boolean {
    return useSelector(UpsertEmployeeScreenSelectors.isCreating);
  }

  public get isUpdating(): boolean {
    return useSelector(UpsertEmployeeScreenSelectors.isUpdating);
  }

  public createUser(user: EmployeeForm): void {
    storeRef.dispatch(UpsertEmployeeScreenActions.createUser(user));
  }

  public updateUser(user: EmployeeForm): void {
    storeRef.dispatch(UpsertEmployeeScreenActions.updateUser(user));
  }
}

export const upsertEmployeeFacade = new UpsertEmployeeFacade();
