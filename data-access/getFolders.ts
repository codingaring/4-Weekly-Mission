import { axiosInstance } from "./axios/axiosInstance";

export async function getFolders({ folderId }: { folderId?: number }) {
  const query = folderId ? `/folders/${folderId}` : "";

  const response = await axiosInstance.get(`/linkbrary/v1${query}/links`);

  return response.data;
}
