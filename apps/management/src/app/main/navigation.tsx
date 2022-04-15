import React, { ReactElement } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashboardNavigation } from './dashboard/navigation';
import { EmployeesNavigation } from './employees/navigation';
import { ScriptsScreen } from './scripts/screen';
import { SettingsScreen } from './settings/screen';
import { View } from 'react-native';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import { CustomDrawerPanel } from './shared/components';
import { AppHeader } from './shared/app-header';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { variables } from '@styles';
import { appNavigationService } from 'modules/navigation';

export type MainNavigationParams = {
  Dashboard: undefined;
  Employees: undefined;
  Scripts: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<MainNavigationParams>();

export function MainNavigation(): ReactElement {
  const { isTablet, isDesktop } = useScreenDimensions();

  const header = ({ navigation }) => <AppHeader toggleDrawer={navigation.toggleDrawer} />;

  const dashboardHeader = ({ navigation }) => (
    <AppHeader leftContent='Dashboard' toggleDrawer={navigation.toggleDrawer} />
  );

  const employeesHeader = ({ navigation }) => (
    <AppHeader
      leftContent='Employees'
      rightContent={
        <View>
          <AppButton
            leftIcon={<Icon name='plus' stroke={variables.color.background} />}
            title='Add Employee'
            onPress={appNavigationService.navigate('NewEmployee')}
          />
        </View>
      }
      toggleDrawer={navigation.toggleDrawer}
    />
  );

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerPanel}
      defaultStatus={isTablet ? 'open' : 'closed'}
      screenOptions={{
        drawerType: isDesktop ? 'permanent' : 'front',
        header
      }}>
      <Drawer.Screen
        options={{ header: dashboardHeader }}
        name='Dashboard'
        component={DashboardNavigation} />
      <Drawer.Screen
        options={{ header: employeesHeader }}
        name='Employees'
        component={EmployeesNavigation} />
      <Drawer.Screen name='Scripts' component={ScriptsScreen} />
      <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
