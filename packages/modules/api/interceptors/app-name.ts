import { AxiosRequestConfig } from 'axios';
import Constants from 'expo-constants';

export const appNameInterceptor =
  () => (config: AxiosRequestConfig): AxiosRequestConfig => {
    const appName = Constants.manifest.extra.appName;

    if (appName) {
      config.headers['x-app-name'] = appName;
    }

    return config;
  };
