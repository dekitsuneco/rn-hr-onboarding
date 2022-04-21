import { StyleProp, ViewStyle, TextStyle, View } from 'react-native';
import React, { ReactElement, useMemo } from 'react';
import { MenuOption } from 'react-native-popup-menu';
import { AppText } from 'ui-kit/text';
import { createStyles } from 'ui-kit/styles';

export type OptionValue = string | number | boolean;

export interface DropdownOptionProps {
  value: OptionValue;
  style?: ViewStyle;
  titleStyle?: StyleProp<TextStyle>;
  icon?: ReactElement;
  title: string;
  disabled?: boolean;
  onSelect?: () => void;
}

export function DropdownOption({
  value,
  style: optionStyle = {},
  titleStyle = {},
  icon,
  title,
  disabled: isDisabled = false,
  onSelect
}: DropdownOptionProps): ReactElement {
  const menuOptionStyle = useMemo(
    (): { optionWrapper: StyleProp<ViewStyle> } => ({
      optionWrapper: {
        ...style.option,
        ...optionStyle
      }
    }),
    [optionStyle]
  );

  return (
    <MenuOption
      value={value}
      disabled={isDisabled}
      onSelect={onSelect}
      customStyles={menuOptionStyle}>
      <View style={style.icon}>{icon}</View>
      <AppText style={titleStyle}>{title}</AppText>
    </MenuOption>
  );
}

const style = createStyles({
  option: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 14
  },
  icon: {
    marginRight: 8
  }
});
