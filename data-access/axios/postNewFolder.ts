import { axiosInstance } from "./axiosInstance";

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
  const response = await axiosInstance.post(`/linkbrary/v1/folders`, {
    name: folderName,
  });

  return response.data;
}
