import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ReactElement } from 'react';
import { ScriptScreen } from './script/screen';
import { OnboardingScreen } from './screen';
import { Script, Task } from 'features/data';
import { AppHeader } from '@shared/header';
import { TaskScreen } from './task/screen';
import { TaskScreenHeader } from './task/shared/components/task-screen-header';

export type OnboardingNavigationParams = {
  OnboardingMain: undefined;
  Script: { script: Script };
  Task: { task: Task };
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
      <Stack.Screen
        component={TaskScreen}
        name='Task'
        options={{
          header: TaskScreenHeader
        }}
      />
    </Stack.Navigator>
  );
}
