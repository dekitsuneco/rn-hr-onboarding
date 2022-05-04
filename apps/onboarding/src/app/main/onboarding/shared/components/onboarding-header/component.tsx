import React, { Fragment, ReactElement } from 'react';
import { View } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { ProgressBar } from 'ui-kit/progress-bar';
import { createStyles } from '@styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';

interface Props {
  name: string;
}

export function OnboardingHeader({ name }: Props): ReactElement {
  const translate = useTranslation('MAIN.ONBOARDING');

  return (
    <Fragment>
      <View style={style.greeting}>
        <Icon name='greeting' style={style.greetIcon} />
        <AppText theme={TextTheme.LARGEST}>{translate('TEXT_GREETING', { name: name || '' })}</AppText>
      </View>
      <View style={style.progressContainer}>
        <AppText style={style.textProgress}>{translate('TEXT_PROGRESS')}</AppText>
        <ProgressBar value={35} />
      </View>
    </Fragment>
  );
}

const style = createStyles({
  greeting: {
    flexDirection: 'row',
    paddingVertical: 40
  },
  progressContainer: {
    width: '100%',
    marginBottom: 38
  },
  textProgress: {
    marginBottom: 4
  },
  greetIcon: {
    marginRight: 16
  }
});
