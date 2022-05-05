import { ViewStyle, TextStyle, View, TouchableOpacity } from 'react-native';
import React, { ReactElement, useMemo } from 'react';
import { MenuOption, MenuOptionCustomStyle } from 'react-native-popup-menu';
import { AppText } from 'ui-kit/text';
import { createStyles } from 'ui-kit/styles';

export interface DropdownOptionProps<TValue = string> {
  title: string;
  style?: ViewStyle;
  titleStyle?: TextStyle;
  iconStyle?: ViewStyle;
  disabled?: boolean;
  value?: TValue;
  icon?: ReactElement;
  onSelect?: () => void;
}

export function DropdownOption<TValue>({
  title,
  style: optionStyle = {},
  titleStyle = {},
  iconStyle = {},
  disabled: isDisabled = false,
  value,
  icon,
  onSelect: handleSelect
}: DropdownOptionProps<TValue>): ReactElement {
  const menuOptionStyle = useMemo(
    (): MenuOptionCustomStyle => ({
      optionWrapper: {
        ...style.option,
        ...optionStyle
      },
      OptionTouchableComponent: TouchableOpacity
    }),
    [optionStyle]
  );

  return (
    <MenuOption
      customStyles={menuOptionStyle}
      disabled={isDisabled}
      value={value}
      onSelect={handleSelect}>
      {icon && <View style={[style.icon, iconStyle]}>{icon}</View>}
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
    width: 24,
    height: 24,
    marginRight: 8
  }
});
