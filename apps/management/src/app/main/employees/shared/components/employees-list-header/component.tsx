import { AppHeader, AppHeaderProps } from '@app/main/shared/app-header';
import { appNavigationService } from 'features/navigation';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import React from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { variables } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';

export function EmployeesListHeader(props: AppHeaderProps): JSX.Element {
  const { isDesktop, isTablet } = useScreenDimensions();
  const translate = useTranslation('MAIN.EMPLOYEES.EMPLOYEES_LIST_HEADER');

  return (
    <AppHeader
      rightContent={
        <View>
          <AppButton
            isTextHidden={!isTablet}
            leftIcon={<Icon name='plus' stroke={variables.color.background} />}
            title={translate('BUTTON_ADD_EMPLOYEE')}
            onPress={() => appNavigationService.navigate('UpsertEmployee')}
          />
        </View>
      }
      isDrawerToggleHidden={isDesktop}
      {...props}
    />
  );
}
