import React, { ReactElement } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { forgotPasswordScreenFacade } from './facade';

export function ForgotPasswordScreen(): ReactElement {
  const handleGoBackPress = (): void => {
    forgotPasswordScreenFacade.goBack();
  };

  const handleResetpress = (): void => {
    forgotPasswordScreenFacade.navigateToLinkSent();
  };

  return (
    <AccountAccessLayout>
      <View style={style.container}>
        <TouchableOpacity onPress={handleGoBackPress} style={{ marginBottom: 50 }}>
          <Text style={style.linkText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleResetpress} style={style.button}>
          <Text style={style.buttonText}>Reset Password</Text>
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
    color: 'white',
    fontSize: 15
  },
  linkText: {
    color: '#26A0F8',
    fontSize: 15
  }
});
