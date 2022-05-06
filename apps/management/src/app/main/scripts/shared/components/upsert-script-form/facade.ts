import { storeRef } from '@store';
import { ScriptForm } from './forms';
import { UpsertScriptFormActions } from './store';

export class UpsertScriptFormFacade {
  public createScript(data: ScriptForm): void {
    storeRef.dispatch(UpsertScriptFormActions.createScript({ ...data, coverID: 10 }));
  }
}

export const upsertScriptFormFacade = new UpsertScriptFormFacade();
