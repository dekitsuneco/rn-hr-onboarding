import { AxiosError } from 'axios';
import { action, actionWithPayload } from 'modules/store';
import { EmployeeForm } from '../forms/employee';

export class UpsertEmployeeScreenActions {
  public static createUser = actionWithPayload<EmployeeForm>(
    '[Upsert  Employee Screen] Create User'
  );

  public static createUserFailure = actionWithPayload<AxiosError>(
    '[Upsert Employee Screen] Create User Failure'
  );

  public static createUserSuccess = action(
    '[Upsert Employee Screen] Create User Success'
  );
}
