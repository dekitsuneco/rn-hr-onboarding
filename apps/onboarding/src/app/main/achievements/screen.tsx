import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { achievementsFacade } from './facade';

export function AchievementsScreen(): JSX.Element {
  useEffect(() => {
    achievementsFacade.init();
  }, []);

  return (
    <View style={style.screen}>
      <Text style={style.text}>Achievements Screen</Text>
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
