import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createStyles } from '@styles';

type LabelTheme = 'onboarding' | 'pending' | 'completed' | 'hr';

export function Label(): ReactElement {
  return <View style={style.container} />;
}

const style = createStyles({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 4
  },
  onboarding: {},
  pending: {},
  completed: {},
  hr: {}
});
