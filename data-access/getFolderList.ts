import { BASE_URL } from "./BASE_URL";

export async function getFolderList(
  folderId: string | string[] | undefined,
  userId?: string
) {
  const query = `?folderId=${folderId}`;

  const response = await fetch(`${BASE_URL}users/${userId}/links${query}`);
  const result = await response.json();

  return result;
}
