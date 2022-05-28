import { StorageToken, api } from './api';
import Config from '../config';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { createAuthorizationHeader } from './utils';
import router from 'next/router';

const v1Api = axios.create({ baseURL: Config.BaseApiUrl });

type MaybeRetriedRequest = AxiosRequestConfig & { _retry?: boolean };
export type InterceptedError = AxiosError & { _shouldExit?: boolean };

async function responseInterceptor(error: AxiosError<{ msg?: string }>): Promise<AxiosResponse> {
  const originalRequest = error.config as MaybeRetriedRequest;
  const { data, status } = error.response || {};

  if (!originalRequest._retry && status === 401) {
    if (data?.msg === 'Token has expired') {
      // If the token has expired, we need to refresh it and retry the request
      const { refreshToken } = await api.getToken();
      originalRequest._retry = true;
      const request = await v1Api.post('/token/refresh', undefined, {
        headers: createAuthorizationHeader({}, refreshToken),
      });
      const data = request.data;
      const token = { refreshToken, accessToken: data.access_token } as StorageToken;
      await api.setToken({ token });
      originalRequest.headers = createAuthorizationHeader(
        originalRequest.headers,
        token.accessToken,
      );
      return v1Api(originalRequest);
    }

    await api.removeToken();
    (error as InterceptedError)._shouldExit = true;
    router.push("/login")
    return Promise.reject(error);
  }

  return Promise.reject(error);
}

v1Api.interceptors.response.use(undefined, responseInterceptor);

class Client {
  static v1 = v1Api;
}

export default Client;
