import { GetUserInfoForm } from "../types/DataForm";

export async function getLoginUserInfo(): Promise<GetUserInfoForm | null> {
  try {
    const response = await fetch(`https://bootcamp-api.codeit.kr/api/users`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    });

    if (!response.ok) {
      throw new Error("유저 정보를 읽는데 실패했습니다.");
    }

    const userInfo = await response.json();
    return userInfo;
  } catch (error) {
    return null;
  }
}
