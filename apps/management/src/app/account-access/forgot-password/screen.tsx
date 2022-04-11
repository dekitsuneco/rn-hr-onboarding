import { createStyles } from '@styles';
import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { forgotPasswordScreenFacade } from './facade';
import { AppText, TextTheme } from 'ui-kit/text';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { useTranslation } from 'utils/i18n';

export function ForgotPasswordScreen(): ReactElement {
  const translate = useTranslation('ACCOUNT_ACCESS.FORGOT_PASSWORD');

  const handleGoBackPress = (): void => {
    forgotPasswordScreenFacade.goBack();
  };

  const handleResetpress = (): void => {
    forgotPasswordScreenFacade.navigateToLinkSent();
  };

  return (
    <AccountAccessLayout>
      <View>
        <View style={style.titleContainer}>
          <TouchableOpacity onPress={handleGoBackPress}>
            <Icon name='arrowLeft' style={style.icon} />
          </TouchableOpacity>
          <AppText theme={TextTheme.LARGE}>{translate('TEXT_TITLE')}</AppText>
        </View>
        <AppText theme={TextTheme.SMALL} style={style.text}>
          {translate('TEXT_FORGOT_PASSWORD')}{' '}
        </AppText>
        <AppButton
          title={translate('BUTTON_RESET')}
          style={style.resetButton}
          onPress={handleResetpress} />
      </View>
    </AccountAccessLayout>
  );
}

const style = createStyles({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  text: {
    marginVertical: 60
  },
  resetButton: {
    width: 300
  }
});
