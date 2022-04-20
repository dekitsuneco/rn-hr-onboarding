import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Avatar } from 'ui-kit/avatar';
import { AvatarTheme } from 'ui-kit/avatar/enums';
import { createStyles } from 'ui-kit/styles';
import { AppText } from 'ui-kit/text';
import { Employee } from '../../models/employee';
import { ProgressBar } from 'ui-kit/progress-bar';

export function EmployeeListItem({
  avatar,
  name,
  position,
  phoneNumber,
  email,
  labels,
  progress
}: Employee): ReactElement {
  return (
    <View style={style.container}>
      <View style={style.rightContainer}>
        <Avatar theme={AvatarTheme.SMALL} uri={avatar} />
      </View>
      <View style={style.middleContainer}>
        <View style={style.nameContainer}>
          <AppText>{name}</AppText>
          <AppText>{position}</AppText>
        </View>
        <View style={style.contactsContainer}>
          <AppText>{phoneNumber}</AppText>
          <AppText>{email}</AppText>
        </View>
        <View style={style.progressContainer}>
          <ProgressBar value={progress} />
        </View>
      </View>
      <View style={style.leftContainer} />
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row'
  },
  rightContainer: {},
  middleContainer: {},
  leftContainer: {},
  nameContainer: {},
  contactsContainer: {},
  progressContainer: {
    width: 32
  }
});
