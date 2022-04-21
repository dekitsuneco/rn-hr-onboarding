import React, { ReactElement } from 'react';
import { AppButton } from 'ui-kit/button';
import { MenuTriggerProps } from 'react-native-popup-menu';

export function DropdownTrigger(props: MenuTriggerProps): ReactElement {
  return <AppButton {...props} />;
}
