import { storeRef } from '@store';
import { ScriptForm } from '../shared/components/upsert-script-form/forms';
import { NewScriptScreenActions } from './shared/store';

export class NewScriptScreenFacade {
  public createScript(data: ScriptForm): void {
    storeRef.dispatch(NewScriptScreenActions.createScript({ ...data, coverID: 10 }));
  }
}

export const newScriptScreenFacade = new NewScriptScreenFacade();
