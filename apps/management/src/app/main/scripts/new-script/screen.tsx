import React, { ReactElement } from 'react';
import { useTranslation } from 'utils/i18n';
import { UpsertScriptForm } from '../shared/components/upsert-script-form';
import { newScriptScreenFacade } from './facade';

export function NewScriptScreen(): ReactElement {
  const translate = useTranslation('MAIN.SCRIPTS.NEW_SCRIPT');

  return (
    <UpsertScriptForm
      isSubmitting={newScriptScreenFacade.isSubmitting}
      submitBtnTitle={translate('BUTTON_ADD_SCRIPT')}
      onSubmit={newScriptScreenFacade.createScript}
    />
  );
}
