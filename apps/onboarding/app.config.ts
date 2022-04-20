import { ExpoConfig } from '@expo/config';
import { merge } from 'lodash';
import { PartialDeep } from 'type-fest';

type AppEnv = 'development' | 'production';

export const appEnvConfig = {
  env: 'development' as AppEnv
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
  userInterfaceStyle: 'light',
  icon: './src/assets/images/icon.png',
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#FFFFFF'
  },
  assetBundlePatterns: ['./src/assets/images/*', './src/assets/fonts/*', './src/assets/i18n/*'],
  ios: {
    buildNumber: '1',
    supportsTablet: false,
    bundleIdentifier: 'com.ronasit.hr-onboarding.employee.dev',
    config: {
      usesNonExemptEncryption: false
    }
  },
  android: {
    userInterfaceStyle: 'light',
    versionCode: 1,
    package: 'com.ronasit.hr_onboarding.employee.dev',
    permissions: []
  },
  web: {
    favicon: './src/assets/images/favicon.png'
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'wasm', 'svg']
  },
  extra: appEnvConfig
};

type PartialConfig = PartialDeep<ExpoConfig & { extra: typeof appEnvConfig }>;

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
    return defaultExpoConfig;
  }
};
