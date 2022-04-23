import React, { ReactElement } from 'react';
import { AppButton, AppButtonProps } from 'ui-kit/button';
import { MenuTriggerProps } from 'react-native-popup-menu';

export type DropdownTriggerProps = MenuTriggerProps & AppButtonProps;

export function DropdownTrigger(props: DropdownTriggerProps): ReactElement {
  return <AppButton {...props} />;
}
