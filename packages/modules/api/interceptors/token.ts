import { AxiosRequestConfig } from 'axios';

export const tokenInterceptor =
  (options: { ignoredEndpoints: Array<string>; getToken: () => string }) => (config: AxiosRequestConfig): AxiosRequestConfig => {
    if (options.ignoredEndpoints?.includes(config.url) || !!config.headers.Authorization) {
      return config;
    }

    const token = options.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  };
