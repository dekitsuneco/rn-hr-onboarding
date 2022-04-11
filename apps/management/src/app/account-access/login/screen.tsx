import React, { ReactElement } from 'react';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { loginScreenFacade } from './facade';
import { Icon } from 'ui-kit/icon';
import { AppButton } from 'ui-kit/button';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

export function LoginScreen(): ReactElement {
  const translate = useTranslation('ACCOUNT_ACCESS.LOGIN');

  const handleSignInPress = (): void => {
    loginScreenFacade.navigateToMain();
  };

  const handleForgotPasswordPress = (): void => {
    loginScreenFacade.navigateToForgotPassword();
  };

  return (
    <AccountAccessLayout>
      <Icon name='logoManagement' style={style.icon} />
      <AppButton
        title={translate('BUTTON_SIGN_IN')}
        style={style.signInButton}
        onPress={handleSignInPress} />
      <AppButton
        title={translate('BUTTON_FORGOT_PASSWORD')}
        theme='tertiary'
        onPress={handleForgotPasswordPress} />
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
