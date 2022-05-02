import { variables } from '@styles';
import React, { ReactElement } from 'react';
import { TouchableOpacityProps, ViewStyle } from 'react-native';
import { Card } from 'ui-kit/card';
import { RadioButton, RadioButtonProps } from 'ui-kit/radio-button';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';

export type RadioCardProps = {
  title: string;
  onSelectStyle?: ViewStyle;
  style?: ViewStyle;
} & RadioButtonProps &
  TouchableOpacityProps;

export function RadioCard({
  title,
  isSelected = false,
  onSelectStyle = {},
  style: elementStyle = {},
  onPress
}: RadioCardProps): ReactElement {
  return (
    <Card style={[embeddedStyle.card, elementStyle, isSelected && onSelectStyle]} onPress={onPress}>
      <RadioButton style={embeddedStyle.radioBtn} isSelected={isSelected} />
      <AppText theme={TextTheme.MEDIUM}>{title}</AppText>
    </Card>
  );
}

const embeddedStyle = createStyles({
  card: {
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.color.background
  },
  radioBtn: {
    marginRight: '1rem'
  }
});
