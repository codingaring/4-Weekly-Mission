import axios from "axios";
import { axiosInstance } from "./axios/axiosInstance";

export async function checkSignin(trySignValue: {
  email: string;
  password: string;
}) {
  const response = await axiosInstance.post(`/linkbrary/v1/auth/sign-in`, {
    email: trySignValue.email,
    password: trySignValue.password,
  });

  const { accessToken, refreshToken } = response.data;
  return { accessToken, refreshToken };
}
