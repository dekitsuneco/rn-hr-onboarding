import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from './onboarding/screen';
import { AchievementsScreen } from './achievements/screen';
import { ProfileScreen } from './profile/screen';
import React, { ReactElement } from 'react';
import { createStyles } from 'ui-kit/styles';
import { variables } from '@styles';
import { Icon } from 'ui-kit/icon';

const Tab = createBottomTabNavigator();

export function MainNavigation(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: style.tabBar,
        headerShown: false,
        tabBarLabelStyle: [style.label],
        tabBarActiveTintColor: variables.color.primary
      }}>
      <Tab.Screen
        name='Onboarding'
        component={OnboardingScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={focused ? 'onboardingActive' : 'onboarding'} />
        }}
      />
      <Tab.Screen
        name='Achievements'
        component={AchievementsScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={focused ? 'achievementsActive' : 'achievements'} />
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={focused ? 'profileActive' : 'profile'} />
        }}
      />
    </Tab.Navigator>
  );
}

const style = createStyles({
  tabBar: {
    backgroundColor: variables.color.white,
    borderRadius: 16,
    shadowColor: variables.color.boxShadow,
    marginHorizontal: 12,
    marginBottom: 26,
    height: 68,
    paddingBottom: 7,
    paddingTop: 14,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 15,
    elevation: 15
  },
  label: {
    fontSize: 10
  }
});
