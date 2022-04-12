import { FormGroup } from '../form-group';
import { InputType } from '../text-input';
import { AppTextInput } from '../text-input';
import React, { ReactElement, useState, useCallback } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Icons } from 'assets/icons/icons';
import { Icon } from '../icon';

export interface InputFormGroupProps {
  label?: string;
  message?: string;
  type?: InputType;
  containerStyle?: StyleProp<ViewStyle>;
}

export function InputFormGroup({
  label,
  message,
  type,
  containerStyle,
  ...restProps
}: InputFormGroupProps): ReactElement {
  const [hasError, setError] = useState(false);

  const getIconForInputType = useCallback((): keyof typeof Icons => {
    switch (type) {
      case InputType.SEARCH:
        return 'search';
      case InputType.SELECT:
        return 'arrowDown';
      case InputType.DATE:
        return 'calendar';
      default:
        return null;
    }
  }, [type]);

  const correspondingIconName = getIconForInputType();

  const icon: ReactElement = !!correspondingIconName && <Icon name={correspondingIconName} />;

  return (
    <FormGroup
      label={label}
      message={message}
      hasError={hasError}
      containerStyle={containerStyle}>
      <AppTextInput
        hasError={hasError}
        type={type}
        icon={icon}
        {...restProps} />
    </FormGroup>
  );
}
