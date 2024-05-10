import { axiosInstance } from "./axiosInstance";

interface FolderInfo {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  use_id: number;
}

export async function getFolderInfo({
  folderId,
}: {
  folderId?: any;
}): Promise<FolderInfo> {
  const response = await axiosInstance.get(`/linkbrary/v1/folders/${folderId}`);

  return response.data;
}
