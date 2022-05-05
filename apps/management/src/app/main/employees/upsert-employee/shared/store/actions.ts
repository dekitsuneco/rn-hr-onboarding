import { AxiosError } from 'axios';
import { action, actionWithPayload } from 'modules/store';
import { EmployeeForm } from '../forms/employee';

export class UpsertEmployeeScreenActions {
  public static createUser = actionWithPayload<EmployeeForm>(
    '[UpsertEmployee Screen] Create user'
  );

  public static createFailure = actionWithPayload<AxiosError>(
    '[UpsertEmployee Screen] Create Failure'
  );

  public static createSuccess = action(
    '[UpsertEmployee Screen] Create Success'
  );
}
