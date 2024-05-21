import { axiosInstance } from "./axios/axiosInstance";

interface createNewFolder {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
}

export async function postNewFolder({
  folderName,
}: {
  folderName: string;
}): Promise<createNewFolder[]> {
  const response = await axiosInstance.post(`/folders`, {
    name: folderName,
  });

  return response.data;
}
