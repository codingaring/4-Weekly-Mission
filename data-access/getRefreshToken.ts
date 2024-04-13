export async function getRefreshToken() {
  try {
    const response = await fetch(
      `https://bootcamp-api.codeit.kr/api/refresh-token`,
      {
        method: "POST",
        headers: {
          ContentType: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("유저 정보를 읽는데 실패했습니다.");
    }

    const userInfo = await response.json();
    return userInfo;
  } catch (error) {
    return null;
  }
}
