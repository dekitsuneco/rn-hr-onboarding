import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { loginFacade } from './facade';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen(): JSX.Element {
  useEffect(() => {
    loginFacade.init();
  }, []);

  const navigation = useNavigation();

  const handleLoginBtn = (): void => {
    navigation.navigate('Main');
  };

  const handleForgotPasswordBtn = (): void => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={style.screen}>
      <Text style={style.text}>Login Screen</Text>
      <View style={style.btnGroup}>
        <Button title='Go to Main screen' onPress={handleLoginBtn} />
        <View style={style.divider} />
        <Button title='Go to Forgot Password screen' onPress={handleForgotPasswordBtn} />
      </View>
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
    fontSize: 30,
    marginBottom: 40
  },
  btnGroup: {
    alignItems: 'stretch'
  },
  divider: {
    marginBottom: 20
  }
});
