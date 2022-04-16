import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { ProgressBar } from 'ui-kit/progress-bar';
import { createStyles } from '@styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';

export function OnboardingHeader(): ReactElement {
  const translate = useTranslation('MAIN.ONBOARDING');
  const name = 'Petya'; //TODO this is temporary fake name

  return (
    <>
      <View style={style.greeting}>
        <Icon name='greeting' style={style.greetIcon} />
        <AppText theme={TextTheme.LARGEST}>{translate('TEXT_GREETING', { name })}</AppText>
      </View>
      <View style={style.progressContainer}>
        <AppText style={style.textProgress}>{translate('TEXT_PROGRESS')}</AppText>
        <ProgressBar value={35} />
      </View>
    </>
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
