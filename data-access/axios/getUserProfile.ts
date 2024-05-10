import { axiosInstance } from "./axiosInstance";

export async function getUserProfile({ userId }: { userId: any }) {
  const response = await axiosInstance.get(`/linkbrary/v1/users/${userId}`);
  return response.data;
}
