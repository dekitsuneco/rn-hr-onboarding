import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IndexScreen } from './index/screen';

export type DashboardNavigationParams = {
  Index: undefined;
};

const Stack = createStackNavigator<DashboardNavigationParams>();

export function DashboardNavigation(): ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Index' component={IndexScreen} />
    </Stack.Navigator>
  );
}
