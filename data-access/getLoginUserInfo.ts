import { axiosInstance } from "./axios/axiosInstance";

interface loginUserProfile {
  id: number;
  name: string;
  image_source: string;
  email: string;
}

export async function getLoginUserInfo(): Promise<loginUserProfile> {
  const response = await axiosInstance.get(`/linkbrary/v1/users`);

  return response.data[0];
}
