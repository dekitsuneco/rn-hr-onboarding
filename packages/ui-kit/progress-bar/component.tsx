import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { commonStyle, createStyles, variables } from '../styles';
import { AppText, TextTheme } from '../text';

interface Props {
  style?: StyleProp<ViewStyle>;
  value: number;
}

export function ProgressBar({ style: elementStyle, value }: Props): ReactElement {
  return (
    <View style={[commonStyle.boxShadow, style.container, elementStyle]}>
      <View style={style.total}>
        <View style={[style.progress, { width: `${value}%` }]} />
      </View>
      <AppText theme={TextTheme.SMALL}>{value}%</AppText>
    </View>
  );
}

const style = createStyles({
  container: {
    backgroundColor: variables.color.white,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  total: {
    backgroundColor: variables.color.textTertiary,
    height: 4,
    flex: 1,
    borderRadius: 20,
    marginRight: 8
  },
  progress: {
    backgroundColor: variables.color.primary,
    height: 4,
    borderRadius: 20
  }
});
