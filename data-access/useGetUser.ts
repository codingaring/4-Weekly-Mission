import { BASE_URL } from "./BASE_URL";

export async function useGetUser() {
  const response = await fetch(`${BASE_URL}users/1`);
  const result = await response.json();
  return result;
}
