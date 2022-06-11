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

type ErrorOrArray = string | { [key: string]: string[] };
export type ErrorResponse = {
  response?: { data?: ErrorOrArray | { message?: ErrorOrArray } };
};

export const getErrorMessage = (err: ErrorResponse): string => {
  if (
    typeof err.response === "undefined" ||
    typeof err.response.data === "undefined"
  ) {
    return "Something went wrong";
  }
  if (typeof err.response.data == "string") {
    return err.response.data;
  } else if (typeof err.response.data.message === "undefined") {
    const data = err.response.data as { [key: string]: string[] };
    const keys = Object.keys(data);
    return data[keys[0]][0];
  } else if (typeof err.response.data.message === "string") {
    return err.response.data.message;
  } else if (typeof err.response.data.message === "object") {
    const data = err.response.data.message as { [key: string]: string[] };
    const keys = Object.keys(data);
    return data[keys[0]][0];
  }
  return "Something went wrong";
};
