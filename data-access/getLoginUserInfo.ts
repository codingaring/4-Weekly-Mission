import { GetUserInfoForm } from "../types/DataForm";

export async function getLoginUserInfo(): Promise<{
  data: GetUserInfoForm[];
}> {
  const response = await fetch(`https://bootcamp-api.codeit.kr/api/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")!}`,
    },
  });

  const result = response.json();
  return result;
}
