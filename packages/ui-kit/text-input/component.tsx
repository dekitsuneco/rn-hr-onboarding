import { variables, createStyles } from '../styles';
import { InputType } from './enums';
import React, { ReactElement, useMemo, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle
} from 'react-native';
import { Icon } from 'ui-kit/icon';
import { FormikProps, FormikValues } from 'formik';
import { get } from 'lodash';

//TODO Add logic to handle different types of inputs - date, text, password, etc

type FormikInputPropertiesOptional = 'handleBlur' | 'handleChange' | 'errors' | 'values' | 'touched';
type InputProps = TextInputProps & Partial<Pick<FormikProps<FormikValues>, FormikInputPropertiesOptional>>;

type IconType = 'leading' | 'trailing';

export interface AppTextInputProps extends InputProps {
  controlStyle?: StyleProp<ViewStyle>;
  hasError?: boolean;
  disabled?: boolean;
  icon?: ReactElement;
  iconType?: IconType;
  iconContainerStyle?: StyleProp<ViewStyle>;
  handleIconPress?: () => void;
  name?: string;
  type?: InputType;
}

export function AppTextInput({
  controlStyle = {},
  style: elementStyle = {},
  name,
  values,
  hasError,
  disabled: isDisabled,
  handleChange,
  handleBlur,
  iconContainerStyle,
  icon,
  iconType = 'trailing',
  handleIconPress,
  type = InputType.TEXT,
  ...restProps
}: AppTextInputProps): ReactElement {
  const isTypeOfPassword = type === InputType.PASSWORD;

  const value = get(values, name);

  const [isFocused, setIsFocused] = useState(false);
  const [isMaskedInput, setMaskedInput] = useState(true);

  const commonInputProps: TextInputProps = {
    value: value ? String(value) : '',
    onChangeText: handleChange?.(name),
    onFocus: () => {
      setIsFocused(true);
    },
    onBlur: (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocused(false);
      if (handleBlur) {
        handleBlur(name)(event);
      }
    },
    editable: !isDisabled && type !== InputType.SELECT && type !== InputType.DATE,
    placeholderTextColor:
      isDisabled || isFocused ? stylePlaceholder.focusedOrDisabled.color : stylePlaceholder.default.color,
    style: [styleInput.textInput, elementStyle]
  };

  const renderedIcon = useMemo(() => {
    if (isTypeOfPassword) {
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
        style={[styleIcon.common, styleIcon[iconType], iconContainerStyle]}
        disabled={isDisabled}
        onPress={handleIconPress}>
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
        renderedIcon && styleInput[iconType],
        controlStyle
      ]}>
      <TextInput
        secureTextEntry={isMaskedInput && isTypeOfPassword}
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
