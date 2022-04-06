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

  return (
    <View style={style.screen}>
      <Text style={style.text}>Login Screen</Text>
      <Button title='Go to Main screen' onPress={handleLoginBtn} />
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
    color: '#fff',
    fontSize: 30,
    margin: 15
  }
});
