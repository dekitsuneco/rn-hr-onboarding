import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { loginFacade } from './facade';
import { Icon } from 'ui-kit/icon';
import { variables, commonStyle } from '@styles';
import { LoginForm, LoginGroup } from 'features/login-form';

export function LoginScreen(): JSX.Element {
  const { isSubmitting } = loginFacade;

  useEffect(() => {
    loginFacade.init();
  }, []);

  const handleLoginBtn = (values: LoginForm): void => {
    loginFacade.authorize(values);
  };

  const handleForgotPasswordBtn = (): void => {
    loginFacade.navigate('ForgotPassword');
  };

  return (
    <View style={style.screen}>
      <ImageBackground
        style={style.bgImage}
        source={require('@assets/images/background.png')}
        resizeMode='cover' />
      <View style={style.columnContainer}>
        <View style={[commonStyle.flexCenter, style.column]}>
          <View style={[commonStyle.flexCenter, style.iconContainer]}>
            <Icon name='logoOnboarding' />
          </View>
        </View>
        <View style={style.column}>
          <View style={style.contentColumn}>
            <View style={style.loginForm}>
              <LoginGroup
                onSubmit={handleLoginBtn}
                onForgotPassword={handleForgotPasswordBtn}
                isSubmitting={isSubmitting}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  columnContainer: {
    flex: 1
  },
  column: {
    height: '50%'
  },
  iconContainer: {
    backgroundColor: variables.color.background,
    width: 134,
    aspectRatio: 1,
    borderRadius: 100
  },
  contentColumn: {
    flex: 1,
    backgroundColor: variables.color.background,
    padding: 40
  },
  loginForm: {
    marginBottom: 34,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
