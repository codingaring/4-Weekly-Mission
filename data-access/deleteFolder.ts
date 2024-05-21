import { axiosInstance } from "./axios/axiosInstance";

export async function deleteFolder({
  folderId,
}: {
  folderId: number | string;
}) {
  const response = await axiosInstance.delete(`/folders/${folderId}`);

  return response.status;
}
