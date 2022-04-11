import React, { useEffect } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { loginFacade } from './facade';
import { useNavigation } from '@react-navigation/native';
import { FlexCenter } from '../shared/components/flex-center';
import { Icon } from 'ui-kit/icon';
import { AppButton } from 'ui-kit/button';
import { appNavigationService } from 'modules/navigation';

export function LoginScreen(): JSX.Element {
  useEffect(() => {
    loginFacade.init();
  }, []);

  const navigation = useNavigation();

  const handleLoginBtn = (): void => {
    appNavigationService.navigate('Main');
  };

  const handleForgotPasswordBtn = (): void => {
    appNavigationService.navigate('ForgotPassword');
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
                <Icon name='logoUnboarding' />
              </View>
            </FlexCenter>
          </View>
          <View style={style.column}>
            <View style={style.contentColumn}>
              <View style={style.loginForm}>
                <AppButton title='Sign in' onPress={handleLoginBtn} />
              </View>
              <View style={{}}>
                <AppButton
                  title='Forgot password?'
                  theme='tertiary'
                  onPress={handleForgotPasswordBtn} />
              </View>
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 40
  },
  loginForm: {
    marginBottom: 34,
    height: 196,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
