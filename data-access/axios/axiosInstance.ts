import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "https://bootcamp-api.codeit.kr/api/";

const config: AxiosRequestConfig = {
  baseURL: BASE_URL,
};
const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use((config: any) => {
  const access_token = localStorage.getItem("accessToken");
  const refresh_token = localStorage.getItem("refreshToken");

  if (config.url === "refresh-token") {
    config.headers.Refresh = refresh_token;
  } else {
    config.headers.Authorization = access_token;
  }
  return config;
});
