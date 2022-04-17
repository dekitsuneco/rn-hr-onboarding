import { FormGroup, FormGroupProps } from '../form-group';
import { InputType, AppTextInput, AppTextInputProps } from '../text-input';
import React, { ReactElement, useState, useCallback } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Icons } from 'assets/icons/icons';
import { Icon } from '../icon';
import { FormikProps, FormikValues } from 'formik';

type FormGroupWithAppTextInputProps<T> = FormGroupProps<T> & AppTextInputProps;

export interface InputFormGroupProps<T = FormikValues> extends FormGroupWithAppTextInputProps<T> {
  formik: FormikProps<T>;
}

export interface InputFormGroupProps {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  message?: string;
  type?: InputType;
}

export function InputFormGroup<T = FormikValues>({
  containerStyle,
  label,
  message,
  type,
  name,
  formik,
  ...restProps
}: InputFormGroupProps<T>): ReactElement {
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

  const icon = !!correspondingIconName && <Icon name={correspondingIconName} />;

  return (
    <FormGroup
      containerStyle={containerStyle}
      name={name}
      label={label}
      message={message}
      isSubmitted={formik.submitCount > 0}
      touched={formik.touched}
      errors={formik.errors}
      onErrorStateChange={setError}>
      <AppTextInput
        name={name}
        type={type}
        icon={icon}
        hasError={hasError}
        {...formik}
        {...restProps} />
    </FormGroup>
  );
}
