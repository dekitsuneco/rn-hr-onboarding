import { appConfig } from './constants';
import { registerRootComponent } from 'expo';
import React, { ReactElement } from 'react';
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

  return <App />;
}

registerRootComponent(Root);
