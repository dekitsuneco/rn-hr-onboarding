import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AchievementsScreen } from './achievements/screen';
import { ProfileScreen } from './profile/screen';
import React, { Fragment, ReactElement } from 'react';
import { createStyles } from 'ui-kit/styles';
import { commonStyle, variables } from '@styles';
import { Icon } from 'ui-kit/icon';
import { useTranslation } from 'utils/i18n';
import { OnboardingNavigation } from './onboarding/navigation';
import { appNavigationService } from 'features/navigation';
import { mainFacade } from './facade';
import { AppActivityIndicator } from 'ui-kit/activity-indicator';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export function MainNavigation(): ReactElement {
  const translate = useTranslation('MAIN.NAVIGATION');
  const { isFetching } = mainFacade;

  const isTabBarHidden = ['Task'].includes(appNavigationService.currentRoute?.name);

  return (
    <Fragment>
      {isFetching ? (
        <View style={style.indicatorContainer}>
          <AppActivityIndicator color={variables.color.primary} />
        </View>
      ) : (
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
      )}
    </Fragment>
  );
}

const style = createStyles({
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center'
  },
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
