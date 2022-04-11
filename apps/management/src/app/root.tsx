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
    SFProDisplayBold: require('assets/fonts/SF-Pro-Display-Bold.otf'),
    SFProDisplayRegular: require('assets/fonts/SF-Pro-Display-Regular.otf'),
    SFProTextRegular: require('assets/fonts/SF-Pro-Text-Regular.otf'),
    SFProTextSemiBold: require('assets/fonts/SF-Pro-Text-Semibold.otf')
  });

  if (!areFontsReady) {
    return null;
  }

  return <App />;
}

registerRootComponent(Root);
