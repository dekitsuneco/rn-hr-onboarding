import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './login/screen';
import { loginFacade } from './login/facade';
import React, { ReactElement, useEffect } from 'react';

const Stack = createStackNavigator();

export function AccountAccessNavigation(): ReactElement {
  useEffect(() => {
    loginFacade.init();
  }, []);

  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
}
