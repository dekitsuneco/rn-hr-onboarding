import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { ScriptScreen } from './scripts/screen';
import { OnboardingScreen } from './screen';
import { Script } from 'features/data';
import { AppHeader } from '@shared/header';

export type OnboardingNavigationParams = {
  OnboardingMain: undefined;
  Script: { script: Script };
};

const Stack = createStackNavigator<OnboardingNavigationParams>();

export function OnboardingNavigation(): ReactElement {
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
    </Stack.Navigator>
  );
}
