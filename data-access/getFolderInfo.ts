import { axiosInstance } from "./axios/axiosInstance";

interface FolderInfo {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  user_id: number;
}

export async function getFolderInfo({
  folderId,
}: {
  folderId?: any;
}): Promise<FolderInfo> {
  const response = await axiosInstance.get(`/folders/${folderId}`);

  return response.data[0];
}
