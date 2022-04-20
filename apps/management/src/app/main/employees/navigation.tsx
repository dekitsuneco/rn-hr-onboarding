import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { useTranslation } from 'utils/i18n';
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
  const translate = useTranslation('MAIN.EMPLOYEES.NAVIGATION');

  return (
    <Stack.Navigator screenOptions={{ header: AppHeader }}>
      <Stack.Screen
        name='EmployeesList'
        options={{ title: translate('SCREEN_TITLE_EMPLOYEES'), header: EmployeesListHeader }}
        component={EmployeesListScreen}
      />
      <Stack.Screen
        name='EditEmployee'
        options={{ title: translate('SCREEN_TITLE_EDIT') }}
        component={EditEmployeeScreen}
      />
      <Stack.Screen
        name='NewEmployee'
        options={{ title: translate('SCREEN_TITLE_NEW') }}
        component={NewEmployeeScreen}
      />
    </Stack.Navigator>
  );
}
