import { axiosInstance } from "./axios/axiosInstance";

export async function checkSignin(trySignValue: {
  email: string;
  password: string;
}) {
  const response = await axiosInstance.post(`/auth/sign-in`, {
    email: trySignValue.email,
    password: trySignValue.password,
  });

  const { accessToken, refreshToken } = response.data;
  return { accessToken, refreshToken };
}
