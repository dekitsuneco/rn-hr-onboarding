import { AxiosError } from 'axios';
import { action, actionWithPayload } from 'modules/store';
import { ScriptForm } from '../forms';

export class UpsertScriptFormActions {
  public static storeTag = 'Upsert screen form';

  public static createScript = actionWithPayload<ScriptForm>(
    `[${this.storeTag}] Create Script`
  );

  public static createSuccess = action(
    `[${this.storeTag}] Create Success`
  );

  public static createFailure = actionWithPayload<AxiosError>(
    `[${this.storeTag}] Create Failure`
  );
}
