import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingScreen } from './onboarding/screen';
import React, { ReactElement } from 'react';

const Stack = createStackNavigator();

export function MainNavigation(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Onboarding' component={OnboardingScreen} />
    </Stack.Navigator>
  );
}
