import React, { ReactElement } from 'react';
import { AccountAccessLayout } from '../shared/account-access-layout';
import { linkSentScreenFacade } from './facade';
import { AppText } from 'ui-kit/text';
import { AppButton } from 'ui-kit/button';

export function LinkSentScreen(): ReactElement {
  const handleBackPress = (): void => {
    linkSentScreenFacade.popToTop();
  };

  return (
    <AccountAccessLayout>
      <AppText style={{ marginBottom: 50 }}>Done! We’ve sent you the password recovery link.</AppText>
      <AppButton
        title='Back to Sign In'
        theme='tertiary'
        onPress={handleBackPress} />
    </AccountAccessLayout>
  );
}
