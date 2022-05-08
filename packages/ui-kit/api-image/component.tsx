import { AuthSelectors } from 'features/auth';
import { commonAppsConfig } from 'features/constants';
import React, { ReactElement } from 'react';
import { StyleProp, ImageStyle } from 'react-native';
import { ExternalImage } from '../external-image';
import { useSelector } from 'react-redux';

interface ApiImageProps {
  mediaID: number;
  style?: StyleProp<ImageStyle>;
}

export function ApiImage({ mediaID, style }: ApiImageProps): ReactElement {
  const token = useSelector(AuthSelectors.token);
  const uri = `${commonAppsConfig.api.root}/media/${mediaID}/content`;
  const headers = { Authorization: 'Bearer ' + token };

  return <ExternalImage
    uri={uri}
    headers={headers}
    style={style} />;
}
