import React, { ReactElement } from 'react';
import { Switch, SwitchProps } from 'react-native';
import { variables } from '../styles';

export function AppSwitch({ value, onValueChange, style }: SwitchProps): ReactElement {
  return (
    <Switch
      style={style}
      value={value}
      onValueChange={onValueChange}
      trackColor={{
        false: variables.color.textSecondary,
        true: variables.color.primary
      }}
      thumbColor={variables.color.white}
      ios_backgroundColor={variables.color.textSecondary}
    />
  );
}
