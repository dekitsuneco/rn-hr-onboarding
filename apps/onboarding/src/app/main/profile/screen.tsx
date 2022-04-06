import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { profileFacade } from './facade';

export function ProfileScreen(): JSX.Element {
  useEffect(() => {
    profileFacade.init();
  }, []);

  return (
    <View style={style.screen}>
      <Text style={style.text}>Profile Screen</Text>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});
