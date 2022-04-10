import { createStyles } from '@styles';
import React, { ReactElement } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { forgotPasswordScreenFacade } from './facade';
import { AppText } from 'ui-kit/text';
import { TextTheme } from 'ui-kit/text/enums';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';

export function ForgotPasswordScreen(): ReactElement {
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
          <TouchableOpacity onPressIn={handleGoBackPress}>
            <Icon name='arrowLeft' style={{ marginRight: 10 }} />
          </TouchableOpacity>
          <AppText theme={TextTheme.LARGE}>Forgot Password</AppText>
        </View>
        <AppText theme={TextTheme.SMALL} style={{ marginVertical: 60 }}>
          Forgot your password? {'\n'}
          No problem, just enter your email{'\n'}
          address and we will sort it out.
        </AppText>
        <AppButton
          title='Reset Password'
          style={{ width: 300 }}
          onPress={handleResetpress} />
      </View>
    </AccountAccessLayout>
  );
}

const style = createStyles({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
