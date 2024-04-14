import { GetUserInfoForm } from "../types/DataForm";
import { axiosInstance } from "./axios/axiosInstance";

export async function getLoginUserInfo(): Promise<{
  data: GetUserInfoForm[];
}> {
  const response = await axiosInstance.get(`/users`);

  return response.data;
}
