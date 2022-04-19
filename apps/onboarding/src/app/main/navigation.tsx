import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { OnboardingScreen } from './onboarding/screen';
import { AchievementsScreen } from './achievements/screen';
import { ProfileScreen } from './profile/screen';
import React, { ReactElement } from 'react';
import { createStyles } from 'ui-kit/styles';
import { variables } from '@styles';
import { Icon } from 'ui-kit/icon';
import { useTranslation } from 'utils/i18n';

const Tab = createBottomTabNavigator();

export function MainNavigation(): ReactElement {
  const translate = useTranslation('MAIN.NAVIGATION');

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
          tabBarIcon: ({ focused }) => <Icon name={focused ? 'onboardingActive' : 'onboarding'} />,
          title: translate('ONBOARDING')
        }}
      />
      <Tab.Screen
        name='Achievements'
        component={AchievementsScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={focused ? 'achievementsActive' : 'achievements'} />,
          title: translate('ACHIEVEMENTS')
        }}
      />
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => <Icon name={focused ? 'profileActive' : 'profile'} />,
          title: translate('PROFILE')
        }}
      />
    </Tab.Navigator>
  );
}

const style = createStyles({
  tabBar: {
    position: 'absolute',
    backgroundColor: variables.color.white,
    borderRadius: 16,
    marginHorizontal: 12,
    marginBottom: 26,
    height: 68,
    paddingBottom: 7,
    paddingTop: 14,
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 15
  },
  label: {
    fontSize: 10
  }
});
