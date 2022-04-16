import { AppText, TextTheme } from '../text';
import { createStyles, variables } from '../styles';
import React, { ReactElement, useMemo, useEffect } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import { FormikProps } from 'formik';
import { AppTextInputProps } from 'ui-kit/text-input';

export interface FormGroupProps<T extends Record<string, any> = Record<string, any>>
  extends Partial<Pick<FormikProps<T>, 'errors' | 'touched'>> {
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  message?: string;
  name: keyof T;
  isSubmitted?: boolean;
  onErrorStateChange?: (hasError: boolean) => void;
  children?: ReactElement;
}

export function FormGroup<T = AppTextInputProps>({
  containerStyle,
  name,
  touched,
  errors,
  onErrorStateChange,
  isSubmitted,
  label,
  message = '',
  children
}: FormGroupProps & T): ReactElement {
  const isTouched = !!touched?.[name];
  const hasValidationErrors = !!errors?.[name];

  const hasError = hasValidationErrors && (isSubmitted || isTouched);

  const messageOrError = hasError ? (errors[name] as string) : message;

  useEffect(() => {
    onErrorStateChange?.(hasError);
  }, [hasError]);

  const renderedLabel = useMemo(() => {
    return (
      !!label && (
        <AppText theme={TextTheme.SMALL} style={style.formGroupLabel}>
          {label}
        </AppText>
      )
    );
  }, [label]);

  const renderedMessage = useMemo(() => {
    return (
      <AppText theme={TextTheme.SMALLEST} style={[style.formGroupMessage, hasError && style.formGroupErrorMessage]}>
        {messageOrError}
      </AppText>
    );
  }, [message, messageOrError, hasError]);

  return (
    <View style={containerStyle}>
      {renderedLabel}
      {children}
      {renderedMessage}
    </View>
  );
}

const style = createStyles({
  formGroupLabel: {
    marginBottom: '0.25rem',
    letterSpacing: -0.02
  },
  formGroupMessage: {
    marginTop: '0.25rem',
    letterSpacing: -0.62
  },
  formGroupErrorMessage: {
    color: variables.color.statusDanger
  }
});
