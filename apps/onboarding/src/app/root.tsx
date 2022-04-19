import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import React, { ReactElement } from 'react';
import { App } from './app';

export default function Root(): ReactElement {
  const [areFontsReady] = useFonts({
    ZonaProBold: require('assets/fonts/ZonaPro-Bold.ttf'),
    ZonaProRegular: require('assets/fonts/ZonaPro-Regular.ttf')
  });

  if (!areFontsReady) {
    return null;
  }

  return <App />;
}

registerRootComponent(Root);
