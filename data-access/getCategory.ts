import { BASE_URL } from "./BASE_URL";

export async function getCategory() {
  const response = await fetch(`${BASE_URL}users/1/folders`);
  const result = await response.json();
  return result;
}
