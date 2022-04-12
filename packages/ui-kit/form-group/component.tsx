import { AppText, TextTheme } from '../text';
import { createStyles, variables } from '../styles';
import React, { ReactElement, useMemo } from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

export interface FormGroupProps {
  label?: string;
  message?: string;
  containerStyle?: StyleProp<ViewStyle>;
  children?: ReactElement;
  hasError?: boolean;
}

export function FormGroup({
  label,
  message,
  containerStyle,
  hasError = false,
  children
}: FormGroupProps): ReactElement {
  const renderedLabel = useMemo(() => {
    return (
      label && (
        <AppText theme={TextTheme.SMALL} style={style.formGroupLabel}>
          {label}
        </AppText>
      )
    );
  }, [label]);

  const renderedMessage = useMemo(() => {
    return (
      message && (
        <AppText theme={TextTheme.SMALLEST} style={[style.formGroupMessage, hasError && style.formGroupErrorMessage]}>
          {message}
        </AppText>
      )
    );
  }, [message, hasError]);

  return (
    <View style={[style.formGroup, containerStyle]}>
      {renderedLabel}
      {children}
      {renderedMessage}
    </View>
  );
}

const style = createStyles({
  formGroup: {
    marginBottom: '1.2rem'
  },
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
