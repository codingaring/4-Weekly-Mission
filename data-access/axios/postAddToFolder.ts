import { axiosInstance } from "./axiosInstance";

export async function postAddToFolder({
  url,
  folderId,
}: {
  url: string;
  folderId: number;
}) {
  const response = await axiosInstance.post(`/linkbrary/1v/links`, {
    url: url,
    folderId: folderId,
  });
  return response.data;
}
