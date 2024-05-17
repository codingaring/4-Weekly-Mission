import { axiosInstance } from "./axiosInstance";

export interface FolderListDataForm {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  link_count: number;
}

export async function getCategory(): Promise<FolderListDataForm[] | undefined> {
  const response = await axiosInstance.get(`/linkbrary/v1/folders`);
  return response.data;
}
