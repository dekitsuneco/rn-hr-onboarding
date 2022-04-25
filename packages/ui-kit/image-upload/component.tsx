import React, { ReactElement } from 'react';
import { View, StyleProp, ImageStyle } from 'react-native';
import { AppButton } from '../button';
import { Icon } from '../icon';
import { createStyles, variables } from '../styles';

interface Props {
  imageStyle: StyleProp<ImageStyle>;
  buttonText: string;
}

export function UploadImage({ imageStyle, buttonText }: Props): ReactElement {
  return (
    <View style={style.container}>
      <View style={[style.imageContainer, imageStyle]}>
        <Icon name='uploadImage' />
      </View>
      <AppButton theme='secondary' title={buttonText}>
        <Icon name='uploadImage' stroke={variables.color.primary} />
      </AppButton>
    </View>
  );
}

const style = createStyles({
  container: {},
  imageContainer: {
    backgroundColor: variables.color.backgroundSecondary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    marginBottom: 16
  }
});
