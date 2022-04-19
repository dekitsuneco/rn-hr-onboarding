import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { ReactElement } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountAccessNavigation } from './account-access/navigation';
import { MainNavigation } from './main/navigation';
import { appLinking } from './linking';
import { navigationRef } from 'modules/navigation';
import { useLanguage } from 'utils/i18n';

const Stack = createStackNavigator();
const setLanguage = useLanguage(
  {
    en: require('@assets/i18n/en.json')
  },
  'en'
);

export function App(): ReactElement {
  setLanguage('en');

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        style='light' />
      <NavigationContainer linking={appLinking} ref={navigationRef}>
        <Stack.Navigator initialRouteName='Main' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='AccountAccess' component={AccountAccessNavigation} />
          <Stack.Screen name='Main' component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});
