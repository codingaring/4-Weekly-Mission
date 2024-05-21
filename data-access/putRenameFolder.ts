import { axiosInstance } from "./axios/axiosInstance";

interface PutRenameFolder {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export async function putRenameFolder({
  folderId,
  folderTitle,
}: {
  folderId: number;
  folderTitle: string;
}): Promise<PutRenameFolder> {
  const response = await axiosInstance.put(`/folders/${folderId}`, {
    name: folderTitle,
  });

  return response.data;
}
