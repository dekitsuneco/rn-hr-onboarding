import { variables } from '@styles';
import React, { ReactElement } from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { Card } from 'ui-kit/card';
import { RadioButton, RadioButtonProps } from 'ui-kit/radio-button';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';

export type RadioCardProps = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
} & RadioButtonProps;

export function RadioCard({
  title,
  isSelected = false,
  onPress,
  style: elementStyle = {}
}: RadioCardProps): ReactElement {
  return (
    <Card style={[style.card, elementStyle, isSelected && style.radioCardSelected]} onPress={onPress}>
      <RadioButton style={style.radioBtn} isSelected={isSelected} />
      <AppText theme={TextTheme.MEDIUM}>{title}</AppText>
    </Card>
  );
}

const style = createStyles({
  card: {
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: variables.color.background
  },
  radioCardSelected: {
    borderColor: variables.color.primary
  },
  radioBtn: {
    marginRight: '1rem'
  }
});
