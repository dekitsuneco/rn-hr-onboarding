import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyles, variables } from '../styles';
import { AppText, TextTheme } from '../text';

interface Props {
  style?: StyleProp<ViewStyle>;
  progress?: number;
}

export function ProgressBar({ style, progress }: Props): ReactElement {
  return (
    <View style={[progressStyle.container, style]}>
      <View style={progressStyle.total}>
        <View style={[progressStyle.progress, { width: `${progress}%` }]} />
      </View>
      <AppText theme={TextTheme.SMALL}>{progress}%</AppText>
    </View>
  );
}

const progressStyle = createStyles({
  container: {
    width: '100%',
    maxWidth: 327,
    backgroundColor: variables.color.white,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 16,
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 20,
    elevation: 20
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
