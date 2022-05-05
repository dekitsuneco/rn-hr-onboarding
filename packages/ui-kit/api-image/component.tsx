import { AuthSelectors } from 'features/auth';
import { commonAppsConfig } from 'features/constants';
import React, { ReactElement } from 'react';
import { StyleProp, ImageStyle } from 'react-native';
import { ExternalImage } from '../external-image';
import { useSelector } from 'react-redux';

interface ApiImageProps {
  id: number;
  style?: StyleProp<ImageStyle>;
}

export default function ApiImage({ id, style }: ApiImageProps): ReactElement {
  const token = useSelector(AuthSelectors.token);
  const URI = `${commonAppsConfig.api.root}/media/${id}/content`;
  const headers = { Authorization: 'Bearer ' + token };

  return <ExternalImage
    uri={URI}
    headers={headers}
    style={style} />;
}
