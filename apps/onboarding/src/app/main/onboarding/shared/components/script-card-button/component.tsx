import React, { ReactElement, useMemo } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

interface Props {
  status: string;
  taskId: string; // use taskId later to handle button click
}

export function ScriptCardButton({ status }: Props): ReactElement {
  const transtlate = useTranslation('MAIN.ONBOARDING.SHARED.SCRIPT_CARD_BUTTON');

  const done = useMemo(() => {
    return (
      <TouchableOpacity>
        <Icon name='done' />
      </TouchableOpacity>
    );
  }, []);

  const toContinue = useMemo(() => {
    return (
      <TouchableOpacity style={style.iconArrow}>
        <Icon name='continue' />
      </TouchableOpacity>
    );
  }, []);

  const blocked = useMemo(() => {
    return (
      <TouchableOpacity>
        <Icon name='blocked' />
      </TouchableOpacity>
    );
  }, []);

  const start = useMemo(() => {
    return (
      <View>
        <AppButton title={transtlate('BUTTON_START')} size='small' />
      </View>
    );
  }, []);

  switch (status) {
    case 'done':
      return done;
      break;
    case 'blocked':
      return blocked;
      break;
    case 'process':
      return toContinue;
      break;
    default:
      return start;
      break;
  }
}

const style = createStyles({
  iconArrow: {
    width: 40,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  }
});
