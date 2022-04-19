import { AppHeader, AppHeaderProps } from '@app/main/shared/app-header';
import { appNavigationService } from 'modules/navigation';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import React from 'react';
import { View } from 'react-native';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { variables } from 'ui-kit/styles';

export function EmployeesListHeader(props: AppHeaderProps): JSX.Element {
  const { isDesktop } = useScreenDimensions();

  return (
    <AppHeader
      rightContent={
        <View>
          <AppButton
            leftIcon={<Icon name='plus' stroke={variables.color.background} />}
            title='Add Employee'
            onPress={() => appNavigationService.navigate('NewEmployee')}
          />
        </View>
      }
      isDrawerToggleHidden={isDesktop}
      {...props}
    />
  );
}
