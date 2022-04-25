import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Avatar } from 'ui-kit/avatar';
import { AvatarTheme } from 'ui-kit/avatar/enums';
import { AnyStyle, createStyles } from 'ui-kit/styles';
import { AppText } from 'ui-kit/text';
import { Employee } from '../../models/employee';
import { ProgressBar } from 'ui-kit/progress-bar';
import { variables } from '@styles';
import { Label } from '../label/component';
import { employeeListItemFacade } from './facade';
import { Dropdown } from 'ui-kit/dropdown';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';

export function EmployeeItem({ avatar, name, position, phoneNumber, email, labels, progress }: Employee): ReactElement {
  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <Avatar theme={AvatarTheme.SMALL} uri={avatar} />
      </View>
      <View style={style.middleContainer}>
        <View style={style.middleContainerItem}>
          <AppText>{name}</AppText>
          <AppText style={style.positionText}>{position}</AppText>
        </View>
        <View style={style.middleContainerItem}>
          <AppText>{phoneNumber}</AppText>
          <AppText>{email}</AppText>
        </View>
        <View style={[style.labelsContainer, style.middleContainerItem]}>
          {labels.map((label) => (
            <Label
              key={label}
              label={label}
              style={style.label}
              status={employeeListItemFacade.labelStatus(label)} />
          ))}
        </View>
        <View style={style.middleContainerItem}>
          <ProgressBar value={progress} style={style.progress} />
        </View>
      </View>
      <View style={style.rightContainer}>
        <Dropdown
          renderTo='bottom'
          optionsProps={[
            { title: 'Edit', icon: <Icon name='edit' /> },
            { title: 'Delete', icon: <Icon name='delete' /> },
            { title: 'View answers', icon: <Icon name='eye' /> }
          ]}
          renderTrigger={(props) => (
            <AppButton
              theme='secondary'
              {...props}
              leftIcon={<Icon name='moreSquare' stroke={variables.color.primary} />}
            />
          )}
        />
      </View>
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
  leftContainer: {
    marginRight: 16
  },
  middleContainer: {
    flex: 1
  },
  rightContainer: {
    height: 59
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
    marginRight: 8,
    marginBottom: 8
  },
  progress: {
    width: 150
  },
  dropdownTrigger: {
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  [`@media (min-width: ${variables.breakpoints.tablet})`]: {
    container: {
      flexDirection: 'row'
    },
    middleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    leftContainer: {
      justifyContent: 'center'
    },
    middleContainerItem: {
      width: '25%',
      marginRight: 8
    }
  } as AnyStyle
});
