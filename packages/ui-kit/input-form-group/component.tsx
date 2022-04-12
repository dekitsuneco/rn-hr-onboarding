import { FormGroup } from '../form-group';
import { InputType } from '../text-input';
import { AppTextInput } from '../text-input';
import React, { ReactElement, useState } from 'react';
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

  const typeToIcon = (type: InputType): keyof typeof Icons => {
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
  };

  const correspondingIconName = typeToIcon(type);

  const icon: typeof Icon =
    correspondingIconName && ((<Icon name={correspondingIconName} />) as unknown as typeof Icon);

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
