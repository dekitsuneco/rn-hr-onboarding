import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appFacade } from './facade';
import { AccountAccessNavigation } from '@app/account-access/navigation';
import { MainNavigation } from '@app/main/navigation';

const Stack = createStackNavigator();

export function App(): ReactElement {
  useEffect(() => {
    appFacade.init();
  }, []);

  return (
    <SafeAreaView style={style.screen}>
      <NavigationContainer>
        <View>
          <StatusBar
            translucent={true}
            backgroundColor='transparent'
            style='light' />
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
