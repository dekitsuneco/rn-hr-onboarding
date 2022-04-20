import { appEnvConfig } from 'app.config';
import Constants from 'expo-constants';
import { commonAppsConfig } from 'features/constants';
import { immutableMerge } from 'utils/immutable-merge';

export const appEnv = (Constants.manifest.extra as typeof appEnvConfig).env;

function createConfig(): typeof defaultAppConfig {
  const defaultAppConfig = immutableMerge(commonAppsConfig, {
    sentry: {
      enabled: true,
      dsn: 'https://1a33210df7574fec900f2f3cad138cae@sentry.ronasit.com/139'
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
