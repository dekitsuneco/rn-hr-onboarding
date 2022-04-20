import React, { ReactElement } from 'react';
import { ExternalImage } from '../external-image';
import { createStyles, variables } from '../styles';
import { AvatarTheme } from './enums';
import { StyleProp, View, ViewStyle } from 'react-native';

interface Props {
  uri: string;
  theme: AvatarTheme;
  style?: StyleProp<ViewStyle>;
}

export function Avatar({ uri, theme, style: elementStyle }: Props): ReactElement {
  return (
    <View style={[style.container, style.common, style[theme], elementStyle]}>
      <ExternalImage uri={uri} style={[style.common, style[theme]]} />
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
