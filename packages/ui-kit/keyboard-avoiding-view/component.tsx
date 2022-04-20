import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from 'react-native';

export function AppKeyboardAvoidingView(props: KeyboardAvoidingViewProps): JSX.Element {
  const { children, ...restProps } = props;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} {...restProps}>
      {children}
    </KeyboardAvoidingView>
  );
}
