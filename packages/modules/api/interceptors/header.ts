import { AxiosRequestConfig } from 'axios';

export const headerInterceptor =
  (options: { ignoredEndpoints?: Array<string>; headerKey: string; headerValue: string }) => (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers['x-app-name'] = 'hr_onboarding';

    return config;
  };
