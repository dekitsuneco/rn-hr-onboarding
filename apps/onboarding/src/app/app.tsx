import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appFacade } from './facade';

export function App(): ReactElement {
  useEffect(() => {
    appFacade.init();
  }, []);

  return (
    <SafeAreaView style={style.screen}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        style='light' />
      <Text style={style.text}>Onboarding App</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000'
  }
});
