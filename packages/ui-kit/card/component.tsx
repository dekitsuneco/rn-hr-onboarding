import React, { ReactElement } from 'react';
import { commonStyle, createStyles } from '../styles';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
}

export function Card({ style: elementStyle, children, onPress, disabled }: Props): ReactElement {
  return (
    <TouchableOpacity
      style={[commonStyle.boxShadow, style.container, elementStyle]}
      onPress={onPress}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
}

const style = createStyles({
  container: {
    borderRadius: 10,
    backgroundColor: 'white'
  }
});
