import { Label } from '@shared/label';
import React, { ReactElement, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
}

export function UserStatusLabel({ label, style }: Props): ReactElement {
  const labelTheme = useMemo(() => {
    switch (label) {
      case 'Pending':
        return 'danger';
      case 'Completed':
        return 'success';
      case 'Onboarding':
        return 'progress';
      default:
        return 'neutral';
    }
  }, [label]);

  return <Label
    theme={labelTheme}
    label={label}
    style={style} />;
}
