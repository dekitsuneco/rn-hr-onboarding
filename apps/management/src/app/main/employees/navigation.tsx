import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { AppHeader } from '../shared/app-header';
import { EditEmployeeScreen } from './edit-employee/screen';
import { NewEmployeeScreen } from './new-employee/screen';
import { EmployeesListScreen } from './screen';
import { EmployeesListHeader } from './shared/components';

export type EmployeesNavigationParams = {
  EmployeesList: undefined;
  EditEmployee: undefined;
  NewEmployee: undefined;
};

const Stack = createStackNavigator<EmployeesNavigationParams>();

export function EmployeesNavigation(): ReactElement {
  return (
    <Stack.Navigator screenOptions={{ header: AppHeader }}>
      <Stack.Screen
        name='EmployeesList'
        options={{ title: 'Employees', header: EmployeesListHeader }}
        component={EmployeesListScreen}
      />
      <Stack.Screen
        name='EditEmployee'
        options={{ title: 'Edit' }}
        component={EditEmployeeScreen} />
      <Stack.Screen
        name='NewEmployee'
        options={{ title: 'New' }}
        component={NewEmployeeScreen} />
    </Stack.Navigator>
  );
}
