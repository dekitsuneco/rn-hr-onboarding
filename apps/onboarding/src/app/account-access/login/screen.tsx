import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { loginFacade } from './facade';
import { useNavigation } from '@react-navigation/native';
import { FlexCenter } from '../shared/components/flex-center';

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
      <ImageBackground
        style={style.bgImage}
        source={require('@assets/images/background.png')}
        resizeMode='cover'>
        <View style={style.columnContainer}>
          <View style={style.column}>
            <FlexCenter>
              <View style={style.iconContainer}>
                <Text style={style.icon}>Icon</Text>
              </View>
            </FlexCenter>
          </View>
          <View style={[style.column, style.contentColumn]}>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsa.</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1
  },
  bgImage: {
    width: '100%',
    height: '100%'
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  column: {
    flex: 0.5
  },
  iconContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 47,
    borderRadius: 100
  },
  icon: {
    width: 74,
    height: 41
  },
  contentColumn: {
    backgroundColor: 'white',
    padding: 40
  }
});
