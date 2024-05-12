import { axiosInstance } from "./axiosInstance";

export async function deleteFolder({
  folderId,
}: {
  folderId: number | string;
}) {
  const response = await axiosInstance.delete(
    `/linkbrary/v1/folders/${folderId}`
  );

  return response.status;
}
