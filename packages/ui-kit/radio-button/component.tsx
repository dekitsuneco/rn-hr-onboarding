import React, { ReactElement, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { createStyles, variables } from '../styles';

export type RadioButtonProps = {
  isSelected?: boolean;
  style?: ViewStyle;
};

export function RadioButton({ isSelected = false, style: elementStyle = {} }: RadioButtonProps): ReactElement {
  const component = useMemo(
    () => <View style={[style.radioBtn, isSelected && style.radioBtnSelected, elementStyle]} />,
    [isSelected]
  );

  return component;
}

const style = createStyles({
  radioBtn: {
    width: '1rem',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: variables.color.textTertiary,
    borderRadius: 100
  },
  radioBtnSelected: {
    borderColor: variables.color.primary,
    borderWidth: 4
  }
});
