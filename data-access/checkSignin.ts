import { BASE_URL } from "./BASE_URL";

export async function checkSignin(trySignValue: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${BASE_URL}sign-in`, {
    method: "POST",
    body: JSON.stringify(trySignValue),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("로그인에 실패했습니다.");
  }

  const { data } = await response.json();
  const { accessToken } = data;
  return accessToken;
}
