import { StatusBar } from 'expo-status-bar';
import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountAccesNavigation } from './accountAcces/navigation';
import { MainNavigation } from './main/navigation';
import { appLinking } from './linking';

const Stack = createStackNavigator();

export function App(): ReactElement {

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        style='light' />
      <NavigationContainer linking={appLinking}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='AccountAccess' component={AccountAccesNavigation} />
          <Stack.Screen name='Main' component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
});
