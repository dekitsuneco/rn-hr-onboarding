import React, { ReactElement, useCallback, useMemo } from 'react';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { createStyles, variables } from '@styles';
import { useTranslation } from 'utils/i18n';
import { View } from 'react-native';

interface Props {
  status: string;
  taskID: string; // use taskID later to handle button click
}

export function ScriptCardAction({ status }: Props): ReactElement {
  const translate = useTranslation('MAIN.ONBOARDING.SHARED.SCRIPT_CARD_BUTTON');

  const renderElement = useCallback((status: string) => {
    switch (status) {
      case 'done':
        return (
          <View style={style.iconDone}>
            <Icon name='done' />
          </View>
        );
      case 'blocked':
        return <Icon name='blocked' />;
      case 'process':
        return <Icon style={style.iconContinue} name='chevronRight' />;
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
  iconContinue: {
    marginRight: 12
  },
  iconDone: {
    width: 40,
    height: 40,
    backgroundColor: variables.color.statusSuccess + '1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});
