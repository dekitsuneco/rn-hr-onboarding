import React, { ReactElement } from 'react';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { loginScreenFacade } from './facade';
import { Icon } from 'ui-kit/icon';
import { AppButton } from 'ui-kit/button';

export function LoginScreen(): ReactElement {
  const handleSignInPress = (): void => {
    loginScreenFacade.navigateToMain();
  };

  const handleForgotPasswordPress = (): void => {
    loginScreenFacade.navigateToForgotPassword();
  };

  return (
    <AccountAccessLayout>
      <Icon name='logoManagement' style={{ marginBottom: 118 }} />
      <AppButton
        title='Sign In'
        style={{ width: 300, marginBottom: 70 }}
        onPress={handleSignInPress} />
      <AppButton
        title='Forgot password?'
        theme='tertiary'
        onPress={handleForgotPasswordPress} />
    </AccountAccessLayout>
  );
}
