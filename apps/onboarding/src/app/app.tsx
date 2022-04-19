import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appFacade } from './facade';
import { AccountAccessNavigation } from '@app/account-access/navigation';
import { MainNavigation } from '@app/main/navigation';
import { navigationRef } from 'features/navigation';
import { useLanguage } from 'utils/i18n';

const Stack = createStackNavigator();
const setLanguage = useLanguage(
  {
    en: require('@assets/i18n/en')
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
    <SafeAreaView style={style.screen}>
      <NavigationContainer ref={navigationRef}>
        <View>
          <StatusBar
            translucent={true}
            backgroundColor='transparent'
            style='dark' />
        </View>
        {isTokenLoaded ? (
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
            <Stack.Screen name='AccountAccess' component={AccountAccessNavigation} />
            <Stack.Screen name='Main' component={MainNavigation} />
          </Stack.Navigator>
        ) : (
          <ActivityIndicator />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1
  }
});
