import { registerRootComponent } from 'expo';
import React, { ReactElement } from 'react';
import { App } from './app';
import { useFonts } from 'expo-font';
import { initStore } from '@store/store';
import { Provider } from 'react-redux';

const store = initStore();

export default function Root(): ReactElement {
  const [areFontsReady] = useFonts({
    ZonaProBold: require('assets/fonts/ZonaPro-Bold.ttf'),
    ZonaProRegular: require('assets/fonts/ZonaPro-Regular.ttf')
  });

  if (!areFontsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

registerRootComponent(Root);
