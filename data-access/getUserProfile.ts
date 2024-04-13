import { BASE_URL } from "./BASE_URL";

export async function getUserProfile(userId: string) {
  const response = await fetch(`${BASE_URL}users/${userId}`);
  const result = response.json();

  return result;
}
