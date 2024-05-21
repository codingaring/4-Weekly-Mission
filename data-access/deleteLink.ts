import { axiosInstance } from "./axios/axiosInstance";

export async function deleteLink({ linkId }: { linkId: number }) {
  const response = await axiosInstance.delete(`/folders/${linkId}`);

  return response.status;
}
