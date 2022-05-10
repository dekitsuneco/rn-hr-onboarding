import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactElement } from 'react';
import { useTranslation } from 'utils/i18n';
import { AppHeader } from '../shared/app-header';
import { EditEmployeeScreen } from './edit-employee/screen';
import { UpsertEmployeeScreen } from './upsert-employee/screen';
import { EmployeesListScreen } from './screen';
import { EmployeesListHeader } from './shared/components';
import { User } from 'features/data';
import { UpsertEmployeHeader } from './upsert-employee/shared/components/header';

export type EmployeesNavigationParams = {
  EmployeesList: undefined;
  EditEmployee: undefined;
  UpsertEmployee: { employee?: User };
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
        name='UpsertEmployee'
        options={{
          title: translate('SCREEN_TITLE_NEW'),
          header: UpsertEmployeHeader
        }}
        component={UpsertEmployeeScreen}
      />
    </Stack.Navigator>
  );
}
