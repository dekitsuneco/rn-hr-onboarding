import React, { ReactElement, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { forgotPasswordFacade } from './facade';
import { appNavigationService } from 'modules/navigation';
import { useTranslation } from 'utils/i18n';

export function ForgotPasswordScreen(): ReactElement {
  const translate = useTranslation('ACCOUNT_ACCESS.FORGOT_PASSWORD');

  useEffect((): void => {
    forgotPasswordFacade.init();
  }, []);

  const handleGoBackBtn = () => {
    appNavigationService.goBack();
  };

  return (
    <View style={style.screen}>
      <Text style={style.text}>{translate('TEXT_TITLE')}</Text>
      <Button title={translate('BUTTON_GO_BACK')} onPress={handleGoBackBtn} />
    </View>
  );
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    marginBottom: 15
  }
});
