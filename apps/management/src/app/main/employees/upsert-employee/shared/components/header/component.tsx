import React, { ReactElement } from 'react';
import { AppHeader, AppHeaderProps } from '@app/main/shared/app-header';
import { RouteProp } from '@react-navigation/native';
import { EmployeesNavigationParams } from '@app/main/employees/navigation';
import { AppButton } from 'ui-kit/button';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import { View } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { useTranslation } from 'utils/i18n';
import { createStyles } from '@styles';
import { variables } from '@styles';
import { AppText } from 'ui-kit/text';
import { plainToInstance } from 'class-transformer';
import { User } from 'features/data';

export function UpsertEmployeHeader(props: AppHeaderProps): ReactElement {
  const route = props.route as RouteProp<EmployeesNavigationParams, 'UpsertEmployee'>;
  const editableEmployee = plainToInstance(User, route?.params?.employee);
  const { isTablet } = useScreenDimensions();
  const translate = useTranslation('MAIN.EMPLOYEES.UPSERT_EMPLOYEE.UPSERT_EMPLOYEE_HEADER');

  return (
    <AppHeader
      titleContent={editableEmployee && editableEmployee.firstName + ' ' + editableEmployee.lastName}
      rightContent={
        !!editableEmployee && (
          <View style={style.rightContent}>
            {!!editableEmployee?.createdAt && isTablet && (
              <AppText style={style.addedOnText}>
                {translate('TEXT_ADDED_ON', { date: editableEmployee?.createdAt?.toFormat?.('dd.MM.yyyy') })}
              </AppText>
            )}
            <View>
              <AppButton
                theme='secondary'
                style={style.button}
                textStyle={style.buttonText}
                isTextHidden={!isTablet}
                leftIcon={<Icon name='delete' stroke={variables.color.danger} />}
                title={translate('BUTTON_DELETE')}
              />
            </View>
          </View>
        )
      }
      {...props}
    />
  );
}

const style = createStyles({
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    backgroundColor: variables.color.danger + '1A',
    borderWidth: 0
  },
  buttonText: {
    color: variables.color.danger
  },
  addedOnText: {
    marginRight: 22,
    color: variables.color.textTertiary
  }
});
