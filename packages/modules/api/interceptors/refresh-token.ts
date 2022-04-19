import { AxiosError, AxiosRequestConfig } from 'axios';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiResponseStatus } from '../enums';

export const refreshTokenInterceptor =
  (options: {
    ignoredEndpoints: Array<string>;
    onSuccess: (token: string) => void;
    onError: (error?: AxiosError) => void;
    refreshToken: () => Observable<string>;
    checkIsTokenExpired: (token: string) => boolean;
    getToken: () => string;
  }) => (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
    if (options.ignoredEndpoints?.includes(config.url)) {
      return Promise.resolve(config);
    }

    const token = options.getToken();
    const isTokenExpired = options.checkIsTokenExpired(token);
    const shouldRefreshToken = isTokenExpired && !!token;

    if (shouldRefreshToken) {
      return lastValueFrom(
        options.refreshToken().pipe(
          map((token) => {
            options.onSuccess(token);
            config.headers.Authorization = `Bearer ${token}`;

            return config;
          }),
          catchError((error: AxiosError) => {
            if ([ApiResponseStatus.BAD_REQUEST, ApiResponseStatus.UNAUTHORIZED].includes(error?.response?.status)) {
              options.onError(error);
            }

            return throwError(() => error);
          })
        )
      );
    }

    return Promise.resolve(config);
  };
