import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EmployeesListScreen } from './employees-list/screen';
import { EditEmployeeScreen } from './edit-employee/screen';
import { NewEmployeeScreen } from './new-employee/screen';

export type EmployeesNavigationParams = {
  Employees: undefined;
  EditEmployee: undefined;
  NewEmployee: undefined;
};

const Stack = createStackNavigator<EmployeesNavigationParams>();

export function EmployeesNavigation(): ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Employees' component={EmployeesListScreen} />
      <Stack.Screen name='EditEmployee' component={EditEmployeeScreen} />
      <Stack.Screen name='NewEmployee' component={NewEmployeeScreen} />
    </Stack.Navigator>
  );
}
