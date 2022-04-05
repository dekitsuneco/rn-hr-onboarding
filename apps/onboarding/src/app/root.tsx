import { appConfig } from './constants';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import React, { ReactElement } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import * as Sentry from 'sentry-expo';
import { App } from './app';

export default function Root(): ReactElement {
  if (appConfig.sentry.enabled) {
    Sentry.init({
      dsn: appConfig.sentry.dsn,
      enableInExpoDevelopment: false,
      debug: !appConfig.production
    });
  }

  const [areFontsReady] = useFonts({});

  if (!areFontsReady) {
    return null;
  }

  return (
      <App />
  );
}

registerRootComponent(Root);
