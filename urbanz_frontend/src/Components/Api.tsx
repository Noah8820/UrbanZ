import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const BASEURL = 'http://localhost:3030/';

export const defaultAxiosInstance: AxiosInstance = axios.create({
  baseURL: BASEURL,
});

defaultAxiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  let correctPath: boolean = config.url !== "login";
  if (localStorage.getItem("accessToken") !== "" && correctPath) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }
  return config;
  },

  (error: AxiosError) => {
      return Promise.reject(error);
  }
)

export default defaultAxiosInstance;


