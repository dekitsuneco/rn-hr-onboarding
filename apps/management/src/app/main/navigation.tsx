import React, { ReactElement } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashBoardScreen } from './dashboard/screen';
import { EmployeesScreen } from './employees/sceen';
import { ScriptsScreen } from './scripts/screen';
import { SettingsScreen } from './settings/screen';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isBigScreen } from '@styles';

export type MainNavigationParams = {
  Dashboard: undefined;
  Employees: undefined;
  Scripts: undefined;
  Settings: undefined;
};

const defaultStatus = isBigScreen ? 'open' : 'closed';

const Drawer = createDrawerNavigator<MainNavigationParams>();

export function MainNavigation(): ReactElement {
  return (
    <Drawer.Navigator
      defaultStatus={defaultStatus}
      screenOptions={{
        header: ({ navigation }) => {
          return (
            <View style={{ margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <Text>Here should be icon to show navigator:)</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('AccountAccess');
                }}
                style={{ backgroundColor: '#26A0F8', padding: 4, borderRadius: 10 }}>
                <Text style={{ color: 'white' }}>Sign-out</Text>
              </TouchableOpacity>
            </View>
          );
        }
      }}>
      <Drawer.Screen name='Dashboard' component={DashBoardScreen} />
      <Drawer.Screen name='Employees' component={EmployeesScreen} />
      <Drawer.Screen name='Scripts' component={ScriptsScreen} />
      <Drawer.Screen name='Settings' component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
