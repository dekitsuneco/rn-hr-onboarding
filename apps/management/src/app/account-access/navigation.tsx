import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './login/screen';
import { ForgotPasswordScreen } from './forgot-password/screen';
import { LinkSentScreen } from './link-sent/screen';

export type AccountAccessNavigationParams = {
  Login: undefined;
  ForgotPassword: undefined;
  LinkSent: undefined;
};

const Stack = createStackNavigator<AccountAccessNavigationParams>();

export function AccountAccessNavigation(): ReactElement {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      <Stack.Screen name='LinkSent' component={LinkSentScreen} />
    </Stack.Navigator>
  );
}
