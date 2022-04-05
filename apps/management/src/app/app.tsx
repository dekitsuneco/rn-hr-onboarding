import { StatusBar } from 'expo-status-bar';
import React, { ReactElement } from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function App(): ReactElement {

  return (
    <SafeAreaView style={style.container}>
      <StatusBar
        translucent={true}
        backgroundColor='transparent'
        style='light' />
      <Text style={{color: 'white'}}>Management app</Text>
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