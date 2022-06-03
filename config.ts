export default {
  BaseApiUrl:
    process.env.NEXT_PUBLIC_BASE_API_URL ||
    "https://top-choir.herokuapp.com/api/",
  AuthApiUrl:
    process.env.NEXT_PUBLIC_AUTH_API_URL ||
    "https://top-choir.herokuapp.com/api/auth/",
  AccessTokenKey:
    process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || "choir_access_token",
  RefreshTokenKey:
    process.env.NEXT_PUBLIC_REFRESH_TOKEN_KEY || "choir_refresh_token",
};
