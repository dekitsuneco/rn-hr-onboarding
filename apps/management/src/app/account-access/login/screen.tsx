import { LoginForm, LoginGroup } from 'features/login-form';
import React, { ReactElement } from 'react';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { loginScreenFacade } from './facade';

export function LoginScreen(): ReactElement {
  const handleSignInPress = (values: LoginForm): void => {
    loginScreenFacade.authorize(values);
  };

  const handleForgotPasswordPress = (): void => {
    loginScreenFacade.navigateToForgotPassword();
  };

  return (
    <AccountAccessLayout>
      <Icon name='logoManagement' style={style.icon} />
      <LoginGroup onSubmit={handleSignInPress} onForgotPassword={handleForgotPasswordPress} />
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
