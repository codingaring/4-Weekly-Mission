import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "./axios/axiosInstance";

export function createHttpClient() {
  async function get<R>(url: string): Promise<R> {
    try {
      const response: AxiosResponse<R> = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      } else {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
    }
  }

  async function del<R>(url: string): Promise<R> {
    try {
      const response: AxiosResponse<R> = await axiosInstance.delete(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      } else {
        throw new Error("데이터를 삭제하는데 실패했습니다.");
      }
    }
  }

  async function put<T, R>(data: T, url: string): Promise<R> {
    try {
      const response: AxiosResponse<R> = await axiosInstance.put(url, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      } else {
        throw new Error("데이터를 저장하는데 실패했습니다.");
      }
    }
  }

  async function post<T, R>(
    data: T,
    url: string,
    headers?: string
  ): Promise<R> {
    try {
      const response: AxiosResponse<R> = await axiosInstance.post(url, data, {
        headers: {
          "Content-Type": headers ? headers : "application/json",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      } else {
        throw new Error("데이터를 불러오는데 실패했습니다.");
      }
    }
  }

  return {
    get,
    post,
    put,
    del,
  };
}
