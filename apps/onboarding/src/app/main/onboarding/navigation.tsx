import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { ScriptScreen } from './scripts/screen';
import { OnboardingScreen } from './screen';
import { Script, Task } from 'features/data';
import { AppHeader } from '@shared/header';
import { TaskScreen } from './tasks/screen';
import { View } from 'react-native';
import { HeaderButton } from '@shared/header/components/button/component';
import { createStyles } from '@styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';

export type OnboardingNavigationParams = {
  OnboardingMain: undefined;
  Script: { script: Script };
  Task: { task: Task };
};

const Stack = createStackNavigator<OnboardingNavigationParams>();

export function OnboardingNavigation(): ReactElement {
  const translate = useTranslation('MAIN.ONBOARDING.NAVIGATION');

  const TaskHeaderContentRight = (
    <View style={style.contentRight}>
      <HeaderButton iconName='chevronLeft' />
      <HeaderButton iconName='chevronRight' />
    </View>
  );

  const TaskHeaderContentCenter = (
    <View style={style.contentRight}>
      <AppText theme={TextTheme.MEDIUM}>{translate('TITLE_TASK_LIST', { taskCurrent: 2, taskTotal: 8 })}</AppText>
    </View>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={OnboardingScreen}
        name='OnboardingMain'
        options={{ headerShown: false }} />
      <Stack.Screen
        component={ScriptScreen}
        name='Script'
        options={{ header: () => <AppHeader /> }} />
      <Stack.Screen
        component={TaskScreen}
        name='Task'
        options={{
          header: () => <AppHeader contentCenter={TaskHeaderContentCenter} contentRight={TaskHeaderContentRight} />
        }}
      />
    </Stack.Navigator>
  );
}

const style = createStyles({
  contentRight: {
    flexDirection: 'row'
  }
});
