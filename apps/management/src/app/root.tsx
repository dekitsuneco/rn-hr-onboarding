import { registerRootComponent } from 'expo';
import React, { ReactElement } from 'react';
import { App } from './app';
import { useFonts } from 'expo-font';
import { initStore } from '@store/store';
import { Provider } from 'react-redux';

const store = initStore();

export default function Root(): ReactElement {
  const [areFontsReady] = useFonts({
    SFProDisplayBold: require('assets/fonts/SF-Pro-Display-Bold.otf'),
    SFProDisplayRegular: require('assets/fonts/SF-Pro-Display-Regular.otf'),
    SFProTextRegular: require('assets/fonts/SF-Pro-Text-Regular.otf'),
    SFProTextSemiBold: require('assets/fonts/SF-Pro-Text-Semibold.otf')
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
