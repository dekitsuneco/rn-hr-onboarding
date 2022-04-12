import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { loginFacade } from './facade';
import { useTranslation } from 'utils/i18n';
import { Icon } from 'ui-kit/icon';
import { AppButton } from 'ui-kit/button';
import { variables, commonStyle } from '@styles';

export function LoginScreen(): JSX.Element {
  const translate = useTranslation('ACCOUNT_ACCESS.LOGIN');

  useEffect(() => {
    loginFacade.init();
  }, []);

  const handleLoginBtn = (): void => {
    loginFacade.navigate('Main');
  };

  const handleForgotPasswordBtn = (): void => {
    loginFacade.navigate('ForgotPassword');
  };

  return (
    <View style={style.screen}>
      <ImageBackground
        style={style.bgImage}
        source={require('@assets/images/background.png')}
        resizeMode='cover'>
        <View style={style.columnContainer}>
          <View style={[commonStyle.flexCenter, style.column]}>
            <View style={[commonStyle.flexCenter, style.iconContainer]}>
              <Icon name='logoOnboarding' />
            </View>
          </View>
          <View style={style.column}>
            <View style={style.contentColumn}>
              <View style={style.loginForm}>
                <AppButton title={translate('BUTTON_SIGN_IN')} onPress={handleLoginBtn} />
              </View>
              <AppButton
                title={translate('BUTTON_FORGOT_PASSWORD')}
                theme='tertiary'
                onPress={handleForgotPasswordBtn}
              />
            </View>
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
    flex: 1
  },
  columnContainer: {
    flex: 1
  },
  column: {
    flex: 0.5
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
