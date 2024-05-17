import { axiosInstance } from "./axios/axiosInstance";

export async function checkSignup(trySignUpValue: {
  email: string;
  password: string;
}) {
  const response = await axiosInstance.post(`/linkbrary/v1/auth/sign-up`, {
    email: trySignUpValue.email,
    password: trySignUpValue.password,
  });
  return response.data;
}

export async function checkValidationEmail({ email }: { email: string }) {
  const response = await axiosInstance.post(`/linkbrary/v1/users/check-email`, {
    email: email,
  });

  return response.data;
}
