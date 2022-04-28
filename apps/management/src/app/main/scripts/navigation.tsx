import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { useTranslation } from 'utils/i18n';
import { AppHeader } from '../shared/app-header';
import { ScriptsListScreen } from './screen';
import { NewScriptScreen } from './new-script/screen';
import { ScriptsListHeader } from './shared/components';

export type ScriptsNavigationParams = {
  ScriptsList: undefined;
  NewScript: undefined;
};

const Stack = createStackNavigator<ScriptsNavigationParams>();

export function ScriptsNavigation(): ReactElement {
  const translate = useTranslation('MAIN.SCRIPTS.NAVIGATION');

  return (
    <Stack.Navigator screenOptions={{ header: AppHeader }}>
      <Stack.Screen
        name='ScriptsList'
        options={{ title: translate('SCREEN_TITLE_SCRIPTS'), header: ScriptsListHeader }}
        component={ScriptsListScreen}
      />
      <Stack.Screen
        name='NewScript'
        options={{ title: translate('SCREEN_TITLE_NEW') }}
        component={NewScriptScreen} />
    </Stack.Navigator>
  );
}
