import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AchievementsScreen } from './achievements/screen';
import { ProfileScreen } from './profile/screen';
import React, { ReactElement } from 'react';
import { createStyles } from 'ui-kit/styles';
import { commonStyle, variables } from '@styles';
import { Icon } from 'ui-kit/icon';
import { useTranslation } from 'utils/i18n';
import { OnboardingNavigation } from './onboarding/navigation';
import { appNavigationService } from 'features/navigation';

const Tab = createBottomTabNavigator();

export function MainNavigation(): ReactElement {
  const translate = useTranslation('MAIN.NAVIGATION');

  const isTabBarHidden = ['Task'].includes(appNavigationService.currentRoute?.name);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: [commonStyle.boxShadow, style.tabBar, isTabBarHidden && style.tabBarHidden],
        headerShown: false,
        tabBarLabelStyle: [style.label],
        tabBarActiveTintColor: variables.color.primary
      }}>
      <Tab.Screen
        name='Onboarding'
        component={OnboardingNavigation}
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
    paddingTop: 14
  },
  tabBarHidden: {
    position: 'relative',
    display: 'none'
  },
  label: {
    fontSize: 10
  }
});
