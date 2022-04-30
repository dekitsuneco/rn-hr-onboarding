import Constants from 'expo-constants';
import { immutableMerge } from 'utils/immutable-merge';

const defaultAppsConfig = {
  production: false,
  api: {
    root: 'https://dev.api.hr-onboarding.ronasit.com/api',
    publicEndpoints: ['login'],
    refreshTokenEndpoint: '/auth/refresh'
  }
};

function createConfig(): typeof defaultAppsConfig {
  const appEnv = Constants.manifest.extra.env;

  switch (appEnv) {
    case 'production':
      return immutableMerge(defaultAppsConfig, {
        api: {
          root: 'https://prod.api.com'
        },
        production: true
      });
    case 'development':
    default:
      return defaultAppsConfig;
  }
}

export const commonAppsConfig = createConfig();
