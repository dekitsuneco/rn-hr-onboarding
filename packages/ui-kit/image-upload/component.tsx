import React, { ReactElement } from 'react';
import { View, StyleProp, ImageStyle } from 'react-native';
import { AppButton } from '../button';
import { Icon } from '../icon';
import { createStyles, variables } from '../styles';

interface Props {
  imageStyle?: StyleProp<ImageStyle>;
  buttonText: string;
}

export function UploadImage({ imageStyle, buttonText }: Props): ReactElement {
  return (
    <View style={style.container}>
      <View style={[style.imageContainer, imageStyle]}>
        <Icon name='uploadImage' stroke={variables.color.textTertiary} />
      </View>
      <AppButton
        theme='secondary'
        title={buttonText}
        leftIcon={<Icon name='uploadImage' stroke={variables.color.primary} />}
      />
    </View>
  );
}

const style = createStyles({
  container: {
    alignItems: 'center'
  },
  imageContainer: {
    backgroundColor: variables.color.backgroundSecondary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    height: 300,
    marginBottom: 16,
    maxWidth: '100%'
  }
});
