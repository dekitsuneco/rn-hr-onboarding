import { createDrawerNavigator } from '@react-navigation/drawer';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import React, { ReactElement } from 'react';
import { DashboardScreen } from './dashboard/screen';
import { EmployeesNavigation } from './employees/navigation';
import { ScriptsScreen } from './scripts/screen';
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

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerPanel}
      backBehavior='none'
      screenOptions={{
        drawerType: isDesktop ? 'permanent' : 'front',
        header: (props) => <AppHeader isDrawerToggleHidden={isDesktop} {...props} />
      }}>
      <Drawer.Screen
        name='Dashboard'
        options={{ title: 'Dashboard' }}
        component={DashboardScreen} />
      <Drawer.Screen
        name='Employees'
        options={{ headerShown: false }}
        component={EmployeesNavigation} />
      <Drawer.Screen
        name='Scripts'
        options={{ title: 'Scripts' }}
        component={ScriptsScreen} />
      <Drawer.Screen
        name='Settings'
        options={{ title: 'Settings' }}
        component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
