import { BASE_URL } from "./BASE_URL";

export async function getFolders(folderId: string | string[] | undefined) {
  const query = `?folderId=${folderId}`;

  const response = await fetch(`${BASE_URL}users/1/links${query}`);
  const result = await response.json();

  return result;
}
