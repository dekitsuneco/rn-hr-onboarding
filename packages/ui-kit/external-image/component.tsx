import React, { ReactElement } from 'react';
import { Image, ImageStyle, Platform, StyleProp } from 'react-native';
import { Image as CachedImage } from 'react-native-expo-image-cache';

interface Props {
  uri: string;
  headers?: Record<string, string>;
  style?: StyleProp<ImageStyle>;
}

export function ExternalImage({ uri, headers, style = {} }: Props): ReactElement {
  const renderedImage =
    Platform.OS === 'web' ? (
      <Image source={{ uri, headers }} style={style} />
    ) : (
      <CachedImage
        uri={uri}
        options={{ headers }}
        style={style} />
    );

  return renderedImage;
}
