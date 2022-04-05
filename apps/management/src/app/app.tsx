import { StatusBar } from 'expo-status-bar';
import React, { ReactElement, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appFacade } from './facade';

export function App(): ReactElement {

  useEffect(() => {
    appFacade.init();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        style='light' />
      <Text style={{ color: 'white' }}>Management app</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
