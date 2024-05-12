import axios from "axios";

export async function checkSignin(trySignValue: {
  email: string;
  password: string;
}) {
  const response = await axios.post(`/linkbrary/v1/auth/sign-in`, {
    email: trySignValue.email,
    password: trySignValue.password,
  });

  const { accessToken, refreshToken } = response.data;
  return { accessToken, refreshToken };
}
