import { BASE_URL } from "./BASE_URL";

export async function checkSignup(trySignUpValue: {
  email: string;
  password: string;
}) {
  const response = await fetch(`${BASE_URL}sign-up`, {
    method: "POST",
    body: JSON.stringify(trySignUpValue),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("회원가입에 실패했습니다.");
  }
}

export async function checkValidationEmail(insertEmail: { email: string }) {
  const response = await fetch(`${BASE_URL}check-email`, {
    method: "POST",
    body: JSON.stringify(insertEmail),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("이메일 중복 여부를 확인에 실패했습니다.");
  }
}
