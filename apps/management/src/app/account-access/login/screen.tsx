import { Icons } from '@assets/icons/icons';
import React, { ReactElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { loginScreenFacade } from './facade';

export function LoginScreen(): ReactElement {
  const handleSignInPress = (): void => {
    loginScreenFacade.navigateToMain();
  };

  const handleForgotPasswordPress = (): void => {
    loginScreenFacade.navigateToForgotPassword();
  };

  return (
    <AccountAccessLayout>
      <View style={style.container}>
        {Icons.logo()}
        <TouchableOpacity onPress={handleSignInPress} style={style.button}>
          <Text style={style.buttonText}>Sign-in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPasswordPress}>
          <Text style={style.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </AccountAccessLayout>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    backgroundColor: '#26A0F8',
    height: 44,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 10
  },
  buttonText: {
    color: 'white'
  },
  linkText: {
    color: '#26A0F8',
    fontSize: 15
  }
});
