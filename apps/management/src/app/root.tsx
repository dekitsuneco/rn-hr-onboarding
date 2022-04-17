import { appConfig } from './constants';
import { registerRootComponent } from 'expo';
import React, { ReactElement } from 'react';
import * as Sentry from 'sentry-expo';
import { App } from './app';
import { useFonts } from 'expo-font';

export default function Root(): ReactElement {
  if (appConfig.sentry.enabled) {
    Sentry.init({
      dsn: appConfig.sentry.dsn,
      enableInExpoDevelopment: false,
      debug: !appConfig.production
    });
  }

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
