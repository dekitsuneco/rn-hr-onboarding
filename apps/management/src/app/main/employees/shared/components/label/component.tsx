import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyles, variables } from '@styles';
import { AppText } from 'ui-kit/text';

type LabelTheme = 'onboarding' | 'pending' | 'completed' | 'hr';

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
}

export function Label({ label, style: elementStyle }: Props): ReactElement {
  return (
    <View style={[style.container, style[label.toLowerCase() as LabelTheme], elementStyle]}>
      <AppText>{label}</AppText>
    </View>
  );
}

const style = createStyles({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'flex-start'
  },
  onboarding: {
    backgroundColor: variables.color.primary + '1A'
  },
  pending: {
    backgroundColor: variables.color.danger + '1A'
  },
  completed: {
    backgroundColor: variables.color.statusSuccess + '1A'
  },
  hr: {
    backgroundColor: variables.color.statusNeutral
  }
});
