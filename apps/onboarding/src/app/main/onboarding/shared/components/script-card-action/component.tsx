import React, { ReactElement, useCallback, useMemo } from 'react';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

interface Props {
  status: string;
  taskID: string; // use taskID later to handle button click
}

export function ScriptCardAction({ status }: Props): ReactElement {
  const translate = useTranslation('MAIN.ONBOARDING.SHARED.SCRIPT_CARD_BUTTON');

  const renderElement = useCallback((status: string) => {
    switch (status) {
      case 'done':
        return <Icon name='done' />;
      case 'blocked':
        return <Icon name='blocked' />;
      case 'process':
        return <Icon style={style.iconArrow} name='continue' />;
      case 'open':
        return <AppButton title={translate('BUTTON_START')} size='small' />;
      default:
        return null;
    }
  }, []);

  const renderedElement = useMemo(() => renderElement(status), [status]);

  return renderedElement;
}

const style = createStyles({
  iconArrow: {
    marginRight: 12
  }
});
