import { initStore } from '@store/store';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import React, { ReactElement } from 'react';
import { App } from './app';
import { MenuProvider } from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import * as Sentry from 'sentry-expo';
import { appConfig, appEnv } from './constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const store = initStore();

export default function Root(): ReactElement {
  if (appConfig.sentry.enabled) {
    Sentry.init({
      environment: appEnv,
      dsn: appConfig.sentry.dsn,
      enableInExpoDevelopment: false
    });
  }

  const [areFontsReady] = useFonts({
    ZonaProBold: require('assets/fonts/ZonaPro-Bold.ttf'),
    ZonaProRegular: require('assets/fonts/ZonaPro-Regular.ttf')
  });

  if (!areFontsReady) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <MenuProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MenuProvider>
    </SafeAreaProvider>
  );
}

registerRootComponent(Root);
