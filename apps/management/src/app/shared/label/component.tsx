import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyles, variables } from '@styles';
import { AppText } from 'ui-kit/text';

export type LabelTheme = 'progress' | 'danger' | 'success' | 'neutral';

interface Props {
  label: string;
  style?: StyleProp<ViewStyle>;
  theme: LabelTheme;
}

export function Label({ label, theme, style: elementStyle }: Props): ReactElement {
  if (!label) {
    return null;
  }

  return (
    <View style={[style.container, style[theme], elementStyle]}>
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
    alignSelf: 'flex-start',
    backgroundColor: variables.color.statusNeutral
  },
  progress: {
    backgroundColor: variables.color.primary + '1A'
  },
  danger: {
    backgroundColor: variables.color.danger + '1A'
  },
  success: {
    backgroundColor: variables.color.statusSuccess + '1A'
  },
  neutral: {
    backgroundColor: variables.color.statusNeutral + '1A'
  }
});
