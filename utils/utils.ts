import { AxiosRequestConfig } from "axios";
import { stringify } from "qs";
import router from "next/router";
import { api } from "./api";

export function createAuthorizationHeader(
  headers: AxiosRequestConfig["headers"],
  token?: string
): AxiosRequestConfig["headers"] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  if (!token) return headers;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return { ...headers, Authorization: `Bearer ${token}` };
}

export function createUrl(
  uri: string,
  baseUrl: string,
  query?: Record<string, string>
): string {
  let url = uri[0] !== "/" ? uri : uri.slice(1);
  const domainUrl =
    baseUrl[baseUrl.length - 1] !== "/"
      ? baseUrl
      : baseUrl.slice(0, baseUrl.length - 1);

  if (query) {
    url = `${url}?${stringify(query)}`;
  }

  return `${domainUrl}/${url}`;
}

export const redirectLoggedOut = () =>
  typeof window !== "undefined" &&
  api.getToken().catch(() => router.push("/login"));

export const redirectLoggedIn = () =>
  typeof window !== "undefined" &&
  api.getToken().then(() => router.push("/dashboard/biodata"));

export type ErrorResponse = {
  response?: { data?: { message?: string | { [key: string]: string[] } } };
};

export const getErrorMessage = (err: ErrorResponse): string => {
  const message = err.response?.data?.message;
  if (!message) return "";
  if (typeof message == "string") return message;
  const keys = Object.keys(message);
  return message[keys[0]][0];
};
