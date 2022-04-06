import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Logincreen } from './login/screen';
import { ForgotPasswordScreen } from './forgot-password/screen';
import { LinkSentScreen } from './link-sent/screen';

export type AccountAccesNavigationParams = {
  Login: undefined;
  ForgotPassword: undefined;
  LinkSent: undefined;
};

const Stack = createStackNavigator<AccountAccesNavigationParams>();

export function AccountAccesNavigation(): ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Logincreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      <Stack.Screen name='LinkSent' component={LinkSentScreen} />
    </Stack.Navigator>
  );
}
