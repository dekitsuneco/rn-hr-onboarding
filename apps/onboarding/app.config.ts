import { ExpoConfig } from '@expo/config';
import { merge } from 'lodash';
import { PartialDeep } from 'type-fest';

// TODO: Demo configuration. Update in a real app
export const defaultAppConfig = {
  production: false,
  sentry: {
    enabled: false,
    dsn: 'https://your-sentry-dsn'
  },
  api: {
    root: 'https://gorest.co.in/public/v1',
    publicEndpoints: ['/login', '/users'],
    refreshTokenEndpoint: '/auth/refresh'
  }
};

const defaultExpoConfig: ExpoConfig = {
  name: 'HR Onboarding Dev',
  slug: 'hr-onboarding-dev',
  scheme: 'hr-onboarding-dev',
  owner: 'ronas_it',
  entryPoint: 'index.js',
  version: '0.0.1',
  orientation: 'portrait',
  backgroundColor: '#FFFFFF',
  icon: './src/assets/images/icon.png',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#FFFFFF'
  },
  assetBundlePatterns: ['./src/assets/images/*', './src/assets/fonts/*', './src/assets/i18n/*'],
  userInterfaceStyle: 'light',
  ios: {
    buildNumber: '1',
    supportsTablet: false,
    bundleIdentifier: 'com.ronasit.rnstarter.dev',
    backgroundColor: '#FFFFFF',
    config: {
      usesNonExemptEncryption: false
    }
  },
  android: {
    userInterfaceStyle: 'light',
    versionCode: 1,
    package: 'com.ronasit.rnstarter.dev',
    permissions: []
  },
  web: {
    favicon: './src/assets/images/favicon.png'
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'wasm', 'svg']
  },
  extra: defaultAppConfig
};

type PartialConfig = PartialDeep<ExpoConfig & { extra: typeof defaultAppConfig }>;

module.exports = () => {
  const env = process.env.APP_ENV;

  if (env === 'production') {
    return merge(defaultExpoConfig, <PartialConfig>{
      name: 'HR Onboarding',
      slug: 'hr-onboarding',
      scheme: 'hr-onboarding',
      extra: {
        production: true
      }
    });
  } else {
    return {
      ...defaultExpoConfig,
      extra: defaultAppConfig
    };
  }
};
