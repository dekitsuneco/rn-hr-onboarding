import { AxiosError } from 'axios';
import { ApiResponseStatus } from '../enums';

export const unauthorizedInterceptor =
  (options: { ignoredEndpoints?: Array<string>; onError: (error?: AxiosError) => void }) => (error: any): Promise<never> => {
    if (
      error.response?.status === ApiResponseStatus.UNAUTHORIZED &&
      !options.ignoredEndpoints?.includes(error.response.config.url)
    ) {
      options.onError(error);
    }

    return Promise.reject(error);
  };
