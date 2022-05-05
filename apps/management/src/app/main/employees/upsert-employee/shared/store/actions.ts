import { AxiosError } from 'axios';
import { action, actionWithPayload } from 'modules/store';
import { EmployeeForm } from '../forms/employee';

export class UpsertEmployeeScreenActions {
  public static createUser = actionWithPayload<EmployeeForm>(
    '[UpsertEmployee Screen] Create User'
  );

  public static createUserFailure = actionWithPayload<AxiosError>(
    '[UpsertEmployee Screen] Create User Failure'
  );

  public static createUserSuccess = action(
    '[UpsertEmployee Screen] Create User Success'
  );
}
