import React from 'react';
import { KeyboardAvoidingView, KeyboardAvoidingViewProps, Platform } from 'react-native';

export function AppKeyboardAvoidingView(props: KeyboardAvoidingViewProps): JSX.Element {
  return <KeyboardAvoidingView
    enabled={Platform.OS === 'ios'}
    behavior={'padding'}
    {...props} />;
}
