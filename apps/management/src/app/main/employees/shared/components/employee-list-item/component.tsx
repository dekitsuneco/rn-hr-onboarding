import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Avatar } from 'ui-kit/avatar';
import { AvatarTheme } from 'ui-kit/avatar/enums';
import { AnyStyle, createStyles } from 'ui-kit/styles';
import { AppText } from 'ui-kit/text';
import { Employee } from '../../models/employee';
import { ProgressBar } from 'ui-kit/progress-bar';
import { variables } from '@styles';
import { Dropdown } from 'ui-kit/dropdown';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { UserStatusLabel } from '../user-status-label';
import { Label } from '@shared/label';
import { useTranslation } from 'utils/i18n';

interface Props {
  item: Employee;
}

export function EmployeeItem({ item }: Props): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.EMPLOYEES_LIST');
  const { avatar, name, phoneNumber, position, progress, email, labels, role } = item;

  return (
    <View style={style.container}>
      <View style={style.avatar}>
        <Avatar theme={AvatarTheme.SMALL} uri={avatar} />
      </View>
      <View style={style.info}>
        <View style={style.infoItem}>
          <AppText>{name}</AppText>
          <AppText style={style.positionText}>{position}</AppText>
        </View>
        <View style={style.infoItem}>
          <AppText>{phoneNumber}</AppText>
          <AppText>{email}</AppText>
        </View>
        <View style={[style.labelsContainer, style.infoItem]}>
          {labels.map((label) => (
            <UserStatusLabel
              key={label}
              label={label}
              style={style.label} />
          ))}
          {role && <Label
            theme='neutral'
            label={role}
            style={style.label} />}
        </View>
        <View style={style.infoItem}>
          <ProgressBar value={progress} style={style.progress} />
        </View>
      </View>
      <Dropdown
        renderTo='bottom'
        optionsProps={[
          { title: translate('TEXT_EDIT'), icon: <Icon name='edit' /> },
          { title: translate('TEXT_DELETE'), icon: <Icon name='delete' /> },
          { title: translate('TEXT_VIEW_ANSWERS'), icon: <Icon name='eye' /> }
        ]}
        renderTrigger={(props) => (
          <AppButton
            style={style.dropdownTrigger}
            isTextHidden={true}
            theme='secondary'
            {...props}
            leftIcon={<Icon name='moreSquare' stroke={variables.color.primary} />}
          />
        )}
      />
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 16,
    borderColor: variables.color.borderColorSecondary
  },
  avatar: {
    marginRight: 16
  },
  info: {
    flex: 1,
    marginRight: 12
  },
  positionText: {
    color: variables.color.textSecondary
  },
  labelsContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  label: {
    margin: 4
  },
  progress: {
    width: 150
  },
  dropdownTrigger: {
    paddingHorizontal: 12
  },
  [`@media (min-width: ${variables.breakpoints.tablet})`]: {
    container: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    avatar: {
      justifyContent: 'center'
    },
    infoItem: {
      flex: 0.25,
      marginRight: 8
    }
  } as AnyStyle
});
