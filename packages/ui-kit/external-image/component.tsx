import React, { ReactElement } from 'react';
import { Image, ImageStyle, Platform, StyleProp } from 'react-native';
import { Image as CachedImage } from 'react-native-expo-image-cache';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export function ExternalImage({ uri, style = {} }: Props): ReactElement {
  const renderedImage =
    Platform.OS === 'web' ? <Image source={{ uri }} style={style} /> : <CachedImage uri={uri} style={style} />;

  return renderedImage;
}
