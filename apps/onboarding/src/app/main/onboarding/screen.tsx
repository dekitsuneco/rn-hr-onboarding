import React from 'react';
import { ScrollView, View } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { variables } from '@styles';
import { ProgressBar } from 'ui-kit/progress-bar';
import { ScriptCardList } from './shared/components/script-card-list/component';
import { Icon } from 'ui-kit/icon';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';

export function OnboardingScreen(): JSX.Element {
  const translate = useTranslation('MAIN.ONBOARDING');
  const name = 'Petya'; //TODO this is temporary fake name

  return (
    <ScrollView style={style.screen} showsVerticalScrollIndicator={false}>
      <View style={style.header}>
        <View style={style.greeting}>
          <Icon name='greeting' style={style.greetIcon} />
          <AppText theme={TextTheme.LARGEST}>{translate('TEXT_GREETING', { name })}</AppText>
        </View>
        <View style={style.progressContainer}>
          <AppText style={style.textProgress}>{translate('TEXT_PROGRESS')}</AppText>
          <ProgressBar progress={35} />
        </View>
      </View>
      <ScriptCardList />
    </ScrollView>
  );
}

const style = createStyles({
  screen: {
    flex: 1,
    backgroundColor: variables.color.backgroundSecondary
  },
  header: {
    alignSelf: 'center'
  },
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
