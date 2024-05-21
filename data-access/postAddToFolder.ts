import { axiosInstance } from "./axios/axiosInstance";

export async function postAddToFolder({
  url,
  folderId,
}: {
  url: string;
  folderId: number;
}) {
  const response = await axiosInstance.post(`/links`, {
    url: url,
    folderId: folderId,
  });
  return response.data;
}
