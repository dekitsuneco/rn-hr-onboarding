import React, { ReactElement, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { forgotPasswordFacade } from './facade';
import { appNavigationService } from 'modules/navigation';

export function ForgotPasswordScreen(): ReactElement {
  const navigation = useNavigation();

  useEffect((): void => {
    forgotPasswordFacade.init();
  }, []);

  const handleGoBackBtn = () => {
    appNavigationService.goBack();
  };

  return (
    <View style={style.screen}>
      <Text style={style.text}>Forgot Password Screen</Text>
      <Button title='Go back' onPress={handleGoBackBtn} />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 15
  }
});
