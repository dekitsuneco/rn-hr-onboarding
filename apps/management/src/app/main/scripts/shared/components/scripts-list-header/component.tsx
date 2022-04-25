import { AppHeader, AppHeaderProps } from '@app/main/shared/app-header';
import { appNavigationService } from 'features/navigation';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import React from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { variables } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

export function ScriptsListHeader(props: AppHeaderProps): JSX.Element {
  const { isDesktop } = useScreenDimensions();
  const translate = useTranslation('MAIN.SCRIPTS.HEADER');

  return (
    <AppHeader
      rightContent={
        <View>
          <AppButton
            leftIcon={<Icon name='plus' stroke={variables.color.background} />}
            title={translate('BUTTON_ADD_SCRIPT')}
            onPress={() => appNavigationService.navigate('NewScript')}
          />
        </View>
      }
      isDrawerToggleHidden={isDesktop}
      {...props}
    />
  );
}
