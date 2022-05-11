import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Avatar } from 'ui-kit/avatar';
import { AvatarTheme } from 'ui-kit/avatar/enums';
import { AnyStyle, createStyles } from 'ui-kit/styles';
import { AppText } from 'ui-kit/text';
import { ProgressBar } from 'ui-kit/progress-bar';
import { variables } from '@styles';
import { Dropdown } from 'ui-kit/dropdown';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { UserStatusLabel } from '../user-status-label';
import { Label } from '@shared/label';
import { useTranslation } from 'utils/i18n';
import { User } from 'features/data';
import { TranslateRole } from '../../role/utils/translate-role';
import { appNavigationService } from 'features/navigation';
import { instanceToPlain } from 'class-transformer';

interface Props {
  item: User;
}

//Temporary avatar uri and labels
//const avatarUri = 'https://cs.kiozk.ru/assets/c15/5wn/kfh/di1pw2qbavxrxzvviera8ug/art/64354/logo-800-520.jpg?v=1';
const avatarID = 10;
const labels = ['Onboarding'];

export function EmployeeItem({ item }: Props): ReactElement {
  const translate = useTranslation('MAIN.EMPLOYEES.EMPLOYEES_LIST');
  const { fullName, email, roleID, position, phone } = item;

  const handleEditPress = (): void => {
    appNavigationService.navigate('UpsertEmployee', { employee: instanceToPlain(item) });
  };

  return (
    <View style={style.container}>
      <View style={style.avatar}>
        <Avatar theme={AvatarTheme.SMALL} id={avatarID} />
      </View>
      <View style={style.info}>
        <View style={style.infoItem}>
          <AppText>{fullName}</AppText>
          {!!position && <AppText style={style.positionText}>{position}</AppText>}
        </View>
        <View style={style.infoItem}>
          {!!phone && <AppText>{phone}</AppText>}
          <AppText>{email}</AppText>
        </View>
        <View style={[style.labelsContainer, style.infoItem]}>
          {labels.map((label) => (
            <UserStatusLabel
              key={label}
              label={label}
              style={style.label} />
          ))}
          <Label
            theme='neutral'
            label={TranslateRole(roleID)}
            style={style.label} />
        </View>
        <View style={style.infoItem}>
          <ProgressBar value={35} style={style.progress} />
        </View>
      </View>
      <Dropdown
        renderTo='bottom'
        optionsProps={[
          { title: translate('TEXT_EDIT'), icon: <Icon name='edit' />, onSelect: handleEditPress },
          { title: translate('TEXT_DELETE'), icon: <Icon name='delete' stroke={variables.color.black} /> },
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
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
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
