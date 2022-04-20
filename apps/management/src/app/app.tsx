import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountAccessNavigation } from './account-access/navigation';
import { MainNavigation } from './main/navigation';
import { appLinking } from './linking';
import { navigationRef, navigationTheme } from 'features/navigation';
import { useLanguage } from 'utils/i18n';
import { appFacade } from './facade';
import { AppActivityIndicator } from 'ui-kit/activity-indicator';
import { variables } from '@styles';

const Stack = createStackNavigator();
const setLanguage = useLanguage(
  {
    en: require('@assets/i18n/en.json')
  },
  'en'
);

export function App(): ReactElement {
  const { isTokenLoaded, isAuthenticated } = appFacade;
  const initialRouteName = isAuthenticated ? 'Main' : 'AccountAccess';
  setLanguage('en');

  useEffect(() => {
    appFacade.init();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        style='dark' />
      <NavigationContainer
        linking={appLinking}
        ref={navigationRef}
        theme={navigationTheme(variables.color)}>
        {isTokenLoaded ? (
          <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AccountAccess' component={AccountAccessNavigation} />
            <Stack.Screen name='Main' component={MainNavigation} />
          </Stack.Navigator>
        ) : (
          <AppActivityIndicator />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});
