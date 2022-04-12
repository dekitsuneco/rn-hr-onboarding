import { commonStyle, variables, createStyles } from '../styles';
import { InputType } from './enums';
import React, { ReactElement, useMemo, useState } from 'react';
import { TouchableOpacity, View, TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { Icon } from 'ui-kit/icon';

export interface AppTextInputProps extends TextInputProps {
  controlStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  hasError?: boolean;
  floatingLabel?: string;
  icon?: typeof Icon;
  iconPosition?: 'left' | 'right';
  iconContainerStyle?: StyleProp<ViewStyle>;
  handleIconPress?: () => void;
  type?: InputType;
}

export function AppTextInput({
  controlStyle: inputContainerStyle = {},
  style: elementStyle = {},
  hasError,
  disabled: isDisabled,
  floatingLabel,
  icon,
  iconPosition = 'right',
  iconContainerStyle,
  handleIconPress,
  type = InputType.TEXT,
  ...restProps
}: AppTextInputProps): ReactElement {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const [isMaskedInput, setMaskedInput] = useState(true);

  const commonInputProps: TextInputProps = {
    value: value,
    onChangeText: (input: string) => {
      setValue(input);

      setIsFocused(input.length === 0);
    },
    onFocus: () => {
      if (value.length === 0) {
        setIsFocused(true);
      }
    },
    onBlur: () => {
      setIsFocused(false);
    },
    editable: !isDisabled,
    placeholderTextColor:
      isDisabled || isFocused ? stylePlaceholder.focusedOrDisabled.color : stylePlaceholder.default.color,
    style: [commonStyle.formInput, elementStyle, isDisabled && commonStyle.formInputDisabled]
  };

  const renderedIcon = useMemo(() => {
    if (type === InputType.PASSWORD) {
      return (
        <TouchableOpacity style={commonStyle.formInputIcon} onPress={() => setMaskedInput(!isMaskedInput)}>
          <View>
            <Icon name={isMaskedInput ? 'eye' : 'eyeHide'} />
          </View>
        </TouchableOpacity>
      );
    }

    if (!icon) {
      return null;
    }

    return handleIconPress ? (
      <TouchableOpacity
        onPress={handleIconPress}
        style={[commonStyle.formInputIcon, styleIcon[iconPosition], iconContainerStyle]}>
        <View>{icon}</View>
      </TouchableOpacity>
    ) : (
      <View style={[commonStyle.formInputIcon, styleIcon[iconPosition], iconContainerStyle]}>{icon}</View>
    );
  }, [icon, handleIconPress, isMaskedInput, type]);

  return (
    <View
      style={[
        commonStyle.formControl,
        isFocused && commonStyle.formControlFocus,
        hasError && commonStyle.formControlError,
        isDisabled && commonStyle.formInputDisabled,
        icon && styleTextInput[iconPosition],
        inputContainerStyle
      ]}>
      <TextInput
        secureTextEntry={isMaskedInput && type === InputType.PASSWORD}
        placeholder={'Placeholder'}
        {...commonInputProps}
        {...restProps}
      />
      {renderedIcon}
    </View>
  );
}

const styleTextInput = createStyles({
  right: {
    paddingRight: 50
  },
  left: {
    paddingLeft: 50
  }
});

const styleIcon = createStyles({
  right: {
    right: 15
  },
  left: {
    right: 0,
    left: 15
  }
});

const stylePlaceholder = createStyles({
  default: {
    color: variables.color.textTertiary
  },
  focusedOrDisabled: {
    color: variables.color.gray
  }
});
