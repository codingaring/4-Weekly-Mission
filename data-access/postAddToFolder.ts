import { axiosInstance } from "./axios/axiosInstance";

export async function postAddToFolder({
  url,
  folderId,
}: {
  url: string;
  folderId: number;
}) {
  const response = await axiosInstance.post(`/linkbrary/v1/links`, {
    url: url,
    folderId: folderId,
  });
  return response.data;
}
