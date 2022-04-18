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
  name: 'HR Management Dev',
  slug: 'hr-management-dev',
  scheme: 'hr-management-dev',
  owner: 'ronas_it',
  entryPoint: 'index.js',
  version: '0.0.1',
  orientation: 'default',
  backgroundColor: '#000000',
  icon: './src/assets/images/icon.png',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#000000'
  },
  assetBundlePatterns: ['./src/assets/images/*', './src/assets/fonts/*', './src/assets/i18n/*'],
  userInterfaceStyle: 'dark',
  ios: {
    buildNumber: '1',
    supportsTablet: false,
    bundleIdentifier: 'com.ronasit.hr-onboarding.manager.dev',
    backgroundColor: '#000000',
    config: {
      usesNonExemptEncryption: false
    }
  },
  android: {
    versionCode: 1,
    package: 'com.ronasit.hr-onboarding.manager.dev',
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
      name: 'HR Management',
      slug: 'hr-management',
      scheme: 'hr-management',
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
