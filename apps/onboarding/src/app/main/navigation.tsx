import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from './onboarding/screen';
import { AchievementsScreen } from './achievements/screen';
import { ProfileScreen } from './profile/screen';
import React, { ReactElement } from 'react';

const Tab = createBottomTabNavigator();

export function MainNavigation(): ReactElement {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Onboarding' component={OnboardingScreen} />
      <Tab.Screen name='Achievements' component={AchievementsScreen} />
      <Tab.Screen name='ProfileScreen' component={ProfileScreen} />
    </Tab.Navigator>
  );
}
