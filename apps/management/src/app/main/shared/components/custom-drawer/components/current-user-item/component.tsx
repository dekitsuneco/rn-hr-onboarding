import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { Avatar } from 'ui-kit/avatar';
import { AvatarTheme } from 'ui-kit/avatar/enums';

export function CurrentUserItem(): ReactElement {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Avatar theme={AvatarTheme.SMALLEST} uri='https://i.ytimg.com/vi/ID0B8lvQVQU/maxresdefault.jpg' />
      </View>
      <AppText theme={TextTheme.SMALL}>Petya Ivanov</AppText>
    </View>
  );
}

const style = createStyles({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  }
});
