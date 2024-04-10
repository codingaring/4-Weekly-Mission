import { BASE_URL } from "./BASE_URL";

export async function getFolder<T>({
  folderId,
}: {
  folderId: string;
}): Promise<T> {
  const response = await fetch(`${BASE_URL}sample/folder${folderId}`);
  const result = await response.json();

  return result;
}
