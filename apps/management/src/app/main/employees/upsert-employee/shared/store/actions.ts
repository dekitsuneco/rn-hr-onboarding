import { AxiosError } from 'axios';
import { action, actionWithPayload } from 'modules/store';
import { EmployeeForm } from '../forms/employee';

export class UpsertEmployeeScreenActions {
  public static createUser = actionWithPayload<EmployeeForm>(
    '[Upsert Employee Screen] Create User'
  );

  public static createUserFailure = actionWithPayload<AxiosError>(
    '[Upsert Employee Screen] Create User Failure'
  );

  public static createUserSuccess = action(
    '[Upsert Employee Screen] Create User Success'
  );

  public static updateUser = actionWithPayload<EmployeeForm & { id: number }>(
    '[Upsert Employee Screen] Update User'
  );

  public static updateUserFailure = actionWithPayload<AxiosError>(
    '[Upsert Employee Screen] Update User Failure'
  );

  public static updateUserSuccess = action(
    '[Upsert Employee Screen] Update User Success'
  );
}
