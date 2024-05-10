import { axiosInstance } from "./axios/axiosInstance";

export async function getFolders({ folderId }: { folderId?: number }) {
  const query = `/folders${folderId}`;

  const response = await axiosInstance.get(
    `/linkbrary/v1${folderId && query}/links`
  );

  return response.data;
}
