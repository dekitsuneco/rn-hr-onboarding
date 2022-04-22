import React, { ReactElement } from 'react';
import { Switch } from 'react-native';
import { variables } from '../styles';

interface Props {
  value: boolean;
  onValueChange: () => void;
}

export function AppSwitch({ value, onValueChange }: Props): ReactElement {
  return (
    <Switch
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
