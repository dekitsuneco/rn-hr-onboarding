import { createDrawerNavigator } from '@react-navigation/drawer';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import React, { ReactElement } from 'react';
import { useTranslation } from 'utils/i18n';
import { DashboardScreen } from './dashboard/screen';
import { EmployeesNavigation } from './employees/navigation';
import { ScriptsNavigation } from './scripts/navigation';
import { SettingsScreen } from './settings/screen';
import { AppHeader } from './shared/app-header';
import { CustomDrawerPanel } from './shared/components';

export type MainNavigationParams = {
  Dashboard: undefined;
  Employees: undefined;
  Scripts: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<MainNavigationParams>();

export function MainNavigation(): ReactElement {
  const { isDesktop } = useScreenDimensions();
  const translate = useTranslation('MAIN.NAVIGATION');

  return (
    <Drawer.Navigator
      initialRouteName='Employees'
      drawerContent={CustomDrawerPanel}
      backBehavior='none'
      screenOptions={{
        drawerType: isDesktop ? 'permanent' : 'front',
        header: (props) => <AppHeader isDrawerToggleHidden={isDesktop} {...props} />
      }}>
      <Drawer.Screen
        name='Dashboard'
        options={{ title: translate('SCREEN_TITLE_DASHBOARD') }}
        component={DashboardScreen}
      />
      <Drawer.Screen
        name='Employees'
        options={{ headerShown: false }}
        component={EmployeesNavigation} />
      <Drawer.Screen
        name='Scripts'
        options={{ headerShown: false }}
        component={ScriptsNavigation} />
      <Drawer.Screen
        name='Settings'
        options={{ title: translate('SCREEN_TITLE_SETTINGS') }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
