import { axiosInstance } from "./axios/axiosInstance";

export interface FolderListDataForm {
  id: number | string;
  created_at: string;
  favorite: true;
  link: {
    count: number;
  };
  name: string;
  user_id: number;
}

export async function getCategory(): Promise<{
  data: FolderListDataForm[];
}> {
  const response = await axiosInstance.get(`/linkbrary/v1/folders`);
  return response.data;
}
