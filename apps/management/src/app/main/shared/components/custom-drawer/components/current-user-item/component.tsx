import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { Avatar } from 'ui-kit/avatar';
import { AvatarTheme } from 'ui-kit/avatar/enums';
import { User } from 'features/data';

interface Props {
  profile: User;
}

export function CurrentUserItem({ profile }: Props): ReactElement {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Avatar theme={AvatarTheme.SMALLEST} id={10} />
      </View>
      <AppText theme={TextTheme.SMALL}>
        {profile?.firstName} {profile?.lastName}
      </AppText>
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
