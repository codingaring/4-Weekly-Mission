import { axiosInstance } from "./axiosInstance";

interface FolderContents {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

export async function getFolders({
  folderId,
}: {
  folderId: number;
}): Promise<FolderContents[]> {
  const query = folderId ? `/folders/${folderId}` : "";

  const response = await axiosInstance.get(`/linkbrary/v1${query}/links`);

  return response.data;
}
