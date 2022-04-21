import { appEnvConfig } from 'app.config';
import Constants from 'expo-constants';
import { commonAppsConfig } from 'features/constants';
import { immutableMerge } from 'utils/immutable-merge';

export const appEnv = (Constants.manifest.extra as typeof appEnvConfig).env;

function createConfig(): typeof defaultAppConfig {
  const defaultAppConfig = immutableMerge(commonAppsConfig, {
    sentry: {
      enabled: true,
      dsn: 'https://f6b1ba331a474a11b98c8a1f06ee98bf@sentry.ronasit.com/140'
    }
  });

  switch (appEnv) {
    case 'production':
      return immutableMerge(defaultAppConfig, {
        production: true,
        api: {
          root: 'https://prod.api.com'
        }
      });
    case 'development':
    default:
      return defaultAppConfig;
  }
}

export const appConfig = createConfig();
