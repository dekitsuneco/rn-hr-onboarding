import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyles, variables } from '../styles';

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function AppScreen({ children, style: elementStyle = {} }: Props): ReactElement {
  return <View style={[style.screen, elementStyle]}>{children}</View>;
}

const style = createStyles({
  screen: {
    flex: 1,
    backgroundColor: variables.color.white,
    paddingHorizontal: 16
  },
  '@media (min-width: 768)': {
    screen: {
      paddingHorizontal: 24
    }
  },
  '@media (min-width: 1280)': {
    screen: {
      paddingHorizontal: 24
    }
  }
});
