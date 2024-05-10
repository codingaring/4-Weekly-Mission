import { axiosInstance } from "./axios/axiosInstance";

interface FolderContents {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

export async function getFolders({ folderId }: { folderId?: number }) {
  const query = folderId ? `/folders/${folderId}` : "";

  const response = await axiosInstance.get(`/linkbrary/v1${query}/links`);

  return response.data;
}
