import React, { ReactElement } from 'react';
import { createStyles, variables } from '../styles';
import { AvatarTheme } from './enums';
import { StyleProp, View, ViewStyle } from 'react-native';
import { ApiImage } from '../api-image';

interface Props {
  id: number;
  theme: AvatarTheme;
  style?: StyleProp<ViewStyle>;
}

export function Avatar({ id, theme, style: elementStyle }: Props): ReactElement {
  return (
    <View style={[style.container, style.common, style[theme], elementStyle]}>
      <ApiImage mediaID={id} style={[style.common, style[theme]]} />
    </View>
  );
}

const style = createStyles({
  container: {
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 22
    },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 40
  },
  common: {
    aspectRatio: 1
  },
  smallest: {
    height: 32,
    width: 32,
    borderRadius: 16
  },
  small: {
    height: 44,
    borderRadius: 22
  },
  medium: {
    height: 60,
    borderRadius: 30
  },
  large: {
    height: 160,
    borderRadius: 80
  }
});
