import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from './onboarding/screen';
import { AchievementsScreen } from './achievements/screen';
import { ProfileScreen } from './profile/screen';
import React, { ReactElement } from 'react';

const Stack = createBottomTabNavigator();

export function MainNavigation(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
      <Stack.Screen name='Achievements' component={AchievementsScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  );
}
