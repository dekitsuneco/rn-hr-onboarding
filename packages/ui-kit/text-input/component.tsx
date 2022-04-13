import { variables, createStyles } from '../styles';
import { InputType } from './enums';
import React, { ReactElement, useMemo, useState } from 'react';
import { TouchableOpacity, View, TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { Icon } from 'ui-kit/icon';

export interface AppTextInputProps extends TextInputProps {
  controlStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  hasError?: boolean;
  icon?: ReactElement;
  iconType?: 'leading' | 'trailing';
  iconContainerStyle?: StyleProp<ViewStyle>;
  handleIconPress?: () => void;
  type?: InputType;
}

export function AppTextInput({
  controlStyle = {},
  style: elementStyle = {},
  hasError,
  disabled: isDisabled,
  icon,
  iconType = 'trailing',
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
    },
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: () => {
      setIsFocused(false);
    },
    editable: !isDisabled,
    placeholderTextColor:
      isDisabled || isFocused ? stylePlaceholder.focusedOrDisabled.color : stylePlaceholder.default.color,
    style: [styleInput.textInput, elementStyle]
  };

  const renderedIcon = useMemo(() => {
    if (type === InputType.PASSWORD) {
      return (
        <TouchableOpacity
          disabled={isDisabled}
          style={styleIcon.common}
          onPress={() => setMaskedInput(!isMaskedInput)}>
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
        disabled={isDisabled}
        onPress={handleIconPress}
        style={[styleIcon.common, styleIcon[iconType], iconContainerStyle]}>
        <View>{icon}</View>
      </TouchableOpacity>
    ) : (
      <View style={[styleIcon.common, styleIcon[iconType], iconContainerStyle]}>{icon}</View>
    );
  }, [icon, handleIconPress, isMaskedInput, type]);

  return (
    <View
      style={[
        styleControl.common,
        isFocused && styleControl.focus,
        hasError && styleControl.error,
        isDisabled && styleControl.disabled,
        icon && styleInput[iconType],
        controlStyle
      ]}>
      <TextInput
        secureTextEntry={isMaskedInput && type === InputType.PASSWORD}
        {...commonInputProps}
        {...restProps} />
      {renderedIcon}
    </View>
  );
}

const styleControl = createStyles({
  common: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: variables.color.backgroundSecondary,
    borderColor: variables.color.backgroundSecondary,
    borderWidth: 1,
    borderRadius: 10
  },
  focus: {
    backgroundColor: variables.color.background,
    borderColor: variables.color.primary
  },
  error: {
    backgroundColor: variables.color.backgroundTertiary,
    borderColor: variables.color.danger
  },
  disabled: {
    backgroundColor: variables.color.gray + '33',
    opacity: 0.5
  }
});

const styleInput = createStyles({
  textInput: {
    flex: 1,
    height: 44,
    paddingTop: 10,
    paddingBottom: 10,
    color: variables.color.textPrimary,
    fontSize: variables.fontSize.medium
  },
  leading: {
    paddingLeft: 50
  },
  trailing: {
    paddingRight: 50
  }
});

const styleIcon = createStyles({
  common: {
    position: 'absolute',
    top: 0,
    right: 20,
    justifyContent: 'center',
    height: '100%',
    width: 30
  },
  trailing: {
    right: 15
  },
  leading: {
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
