import { ScriptForm } from '@app/main/scripts/shared/components/upsert-script-form/forms';
import { AxiosError } from 'axios';
import { action, actionWithPayload } from 'modules/store';

export class NewScriptScreenActions {
  public static storeTag = 'New Script screen';

  public static createScript = actionWithPayload<ScriptForm>(
    `[${this.storeTag}] Create Script`
  );

  public static createSuccess = action(
    `[${this.storeTag}] Create Script Success`
  );

  public static createFailure = actionWithPayload<AxiosError>(
    `[${this.storeTag}] Create Script Failure`
  );
}
