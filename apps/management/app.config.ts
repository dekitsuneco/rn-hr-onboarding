import { ExpoConfig } from '@expo/config';
import { merge } from 'lodash';
import { PartialDeep } from 'type-fest';

type AppEnv = 'development' | 'production';

export const appEnvConfig = {
  env: 'development' as AppEnv,
  appName: 'hr_management'
};

const defaultExpoConfig: ExpoConfig = {
  name: 'HR Management Dev',
  slug: 'hr-management-dev',
  scheme: 'hr-management-dev',
  owner: 'ronas_it',
  entryPoint: 'index.js',
  version: '0.5.0',
  orientation: 'default',
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
    buildNumber: '5',
    supportsTablet: true,
    bundleIdentifier: 'com.ronasit.hr-onboarding.manager.dev',
    config: {
      usesNonExemptEncryption: false
    }
  },
  android: {
    versionCode: 5,
    package: 'com.ronasit.hr_onboarding.manager.dev',
    permissions: []
  },
  web: {
    favicon: './src/assets/images/favicon.png'
  },
  packagerOpts: {
    config: 'metro.config.js',
    sourceExts: ['ts', 'tsx', 'js', 'jsx', 'json', 'wasm', 'svg']
  },
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          url: 'https://sentry.ronasit.com',
          organization: 'ronasit',
          project: 'hr-onboarding-management',
          authToken: '8ff72bb0325844dc90d081f35797ec6543dcaa3792e84a469a03d49f8115f8bf'
        }
      }
    ]
  },
  plugins: ['sentry-expo'],
  extra: appEnvConfig
};

type PartialConfig = PartialDeep<ExpoConfig & { extra: typeof appEnvConfig }>;

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
    return defaultExpoConfig;
  }
};
