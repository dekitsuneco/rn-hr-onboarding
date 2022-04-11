import React, { ReactElement } from 'react';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { linkSentScreenFacade } from './facade';
import { AppText } from 'ui-kit/text';
import { AppButton } from 'ui-kit/button';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

export function LinkSentScreen(): ReactElement {
  const translate = useTranslation('ACCOUNT_ACCESS.LINK_SENT');

  const handleBackPress = (): void => {
    linkSentScreenFacade.popToTop();
  };

  return (
    <AccountAccessLayout>
      <AppText style={style.text}>{translate('TEXT_LINK_SENT')}</AppText>
      <AppButton
        title={translate('BUTTON_BACK')}
        theme='tertiary'
        onPress={handleBackPress} />
    </AccountAccessLayout>
  );
}

const style = createStyles({
  text: {
    marginBottom: 50
  }
});
