import React, { ReactElement } from 'react';
import { View, Image } from 'react-native';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';

export function CurrentUserItem(): ReactElement {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={{ uri: 'http://risovach.ru/upload/2020/01/generator/chernyy-vlastelin_228838310_orig_.jpg' }}
        />
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
  },
  image: {
    height: 32,
    width: 32,
    borderRadius: 16
  }
});
