import { LoginForm, LoginGroup } from 'features/login-form';
import React, { ReactElement } from 'react';
import { Icon } from 'ui-kit/icon';
import { AppKeyboardAvoidingView } from 'ui-kit/keyboard-avoiding-view';
import { createStyles } from 'ui-kit/styles';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { loginScreenFacade } from './facade';

export function LoginScreen(): ReactElement {
  const { isSubmitting, errorMessage } = loginScreenFacade;

  const handleSignInPress = (values: LoginForm): void => {
    loginScreenFacade.authorize(values);
  };

  const handleForgotPasswordPress = (): void => {
    loginScreenFacade.navigateToForgotPassword();
  };

  return (
    <AccountAccessLayout>
      <Icon name='logoManagement' style={style.icon} />
      <AppKeyboardAvoidingView>
        <LoginGroup
          onSubmit={handleSignInPress}
          onForgotPassword={handleForgotPasswordPress}
          isSubmitting={isSubmitting}
          errorMessage={errorMessage}
        />
      </AppKeyboardAvoidingView>
    </AccountAccessLayout>
  );
}

const style = createStyles({
  icon: {
    marginBottom: 118,
    padding: 4
  },
  signInButton: {
    width: 300,
    marginBottom: 70
  }
});
