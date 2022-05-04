import { storeRef } from '@store';
import { employeesScreenActions } from '../shared/store/actions';
import { User } from 'features/data';

class UpsertEmployeeFacade {
  public createUser(user: User): void {
    storeRef.dispatch(employeesScreenActions.createUser(user));
  }
}

export const upsertEmployeeFacade = new UpsertEmployeeFacade();
