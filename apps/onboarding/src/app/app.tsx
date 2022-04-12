import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appFacade } from './facade';
import { AccountAccessNavigation } from '@app/account-access/navigation';
import { MainNavigation } from '@app/main/navigation';
import { navigationRef } from 'modules/navigation';
import { useLanguage } from 'utils/i18n';

const Stack = createStackNavigator();
const setLanguage = useLanguage(
  {
    en: require('@assets/i18n/en')
  },
  'en'
);

export function App(): ReactElement {
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
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='AccountAccess'>
          <Stack.Screen name='AccountAccess' component={AccountAccessNavigation} />
          <Stack.Screen name='Main' component={MainNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1
  }
});
