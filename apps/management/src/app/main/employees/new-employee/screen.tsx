import { createStyles } from '@styles';
import React, { ReactElement } from 'react';
import { View, ScrollView } from 'react-native';

export function NewEmployeeScreen(): ReactElement {
  return (
    <ScrollView style={style.container}>
      <View style={style.dataContainer}>
        <View style={style.leftContainer} />
        <View style={style.middleContainer} />
        <View style={style.rightContainer} />
      </View>
      <View style={style.buttonsContainer} />
    </ScrollView>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  dataContainer: {},
  buttonsContainer: {},
  leftContainer: {},
  middleContainer: {},
  rightContainer: {}
});
