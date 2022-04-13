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

export function Avatar({ uri, theme, style }: Props): ReactElement {
  return (
    <View style={[avatarStyle.container, avatarStyle.common, avatarStyle[theme], style]}>
      <ExternalImage uri={uri} style={[avatarStyle.common, avatarStyle[theme]]} />
    </View>
  );
}

const avatarStyle = createStyles({
  container: {
    shadowColor: variables.color.black,
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowRadius: 16.0,
    elevation: 10
  },
  common: {
    aspectRatio: 1
  },
  smallest: {
    height: 32,
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
