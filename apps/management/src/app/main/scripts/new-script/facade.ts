import { storeRef } from '@store';
import { useSelector } from 'react-redux';
import { ScriptForm } from '../shared/components/upsert-script-form/forms';
import { NewScriptScreenActions, NewScriptScreenSelectors } from './shared/store';

export class NewScriptScreenFacade {
  public createScript(data: ScriptForm): void {
    storeRef.dispatch(NewScriptScreenActions.createScript({ ...data, coverID: 10 })); //TODO Temporary id for images
  }

  public get isSubmitting(): boolean {
    return useSelector(NewScriptScreenSelectors.isSubmitting);
  }
}

export const newScriptScreenFacade = new NewScriptScreenFacade();
