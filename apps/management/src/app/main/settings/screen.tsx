import React, { ReactElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function SettingsScreen(): ReactElement {
  return (
    <View style={style.container}>
      <Text style={style.text}>Settings</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    color: '#26A0F8'
  }
});
