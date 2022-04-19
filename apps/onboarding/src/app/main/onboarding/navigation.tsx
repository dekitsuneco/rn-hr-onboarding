import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { ScriptsScreen } from './scripts/screen';
import { OnboardingScreen } from './screen';
import { Script } from './scripts/models';
import { ScriptsHeader } from './scripts/components/scripts-header/component';

export type OnboardingNavigationParams = {
  OnboardingScreen: undefined;
  ScriptsScreen: { script: Script };
};

const Stack = createStackNavigator<OnboardingNavigationParams>();

export function OnboardingNvigation(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={OnboardingScreen}
        name='OnboardingScreen'
        options={{ headerShown: false }} />
      <Stack.Screen
        component={ScriptsScreen}
        name='ScriptsScreen'
        options={{ header: () => <ScriptsHeader /> }} />
    </Stack.Navigator>
  );
}
