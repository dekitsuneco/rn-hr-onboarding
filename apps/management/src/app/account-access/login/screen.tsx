import React, { ReactElement } from 'react';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { loginScreenFacade } from './facade';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { LoginGroup } from 'features/login-form';

export function LoginScreen(): ReactElement {
  const handleSignInPress = (): void => {
    loginScreenFacade.navigateToMain();
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
