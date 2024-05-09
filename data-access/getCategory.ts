import { BASE_URL } from "./BASE_URL";

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

export async function getCategory(): Promise<{ data: FolderListDataForm[] }> {
  const response = await fetch(`${BASE_URL}users/1/folders`);
  const result = await response.json();
  return result;
}
