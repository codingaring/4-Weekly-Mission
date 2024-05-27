import { createHttpClient } from "./createHttpClient";

interface TrySignValueProp {
  email: string;
  password: string;
}

interface TrySignResponse {
  accessToken: string;
  refreshToken: string;
}

interface ValidateEmailResponse {
  isUsableEmail: boolean;
}

interface UserResponse {
  data: [
    {
      id: number;
      created_at: string;
      name: string;
      image_source: string;
      email: string;
    },
  ];
}

export const authAPI = {
  checkSignin: async function (trySignValue: {
    email: string;
    password: string;
  }) {
    const baseHttp = createHttpClient();
    const response = await baseHttp.post<TrySignValueProp, TrySignResponse>(
      {
        email: trySignValue.email,
        password: trySignValue.password,
      },
      "/auth/sign-in"
    );
    const { accessToken, refreshToken } = response;
    return { accessToken, refreshToken };
  },
  checkSignup: async function (trySignUpValue: TrySignValueProp) {
    const baseHttp = createHttpClient();
    const response = await baseHttp.post<TrySignValueProp, TrySignResponse>(
      { email: trySignUpValue.email, password: trySignUpValue.password },
      "/auth/sign-up"
    );
    const { accessToken, refreshToken } = response;
    return { accessToken, refreshToken };
  },
  checkValidationEmail: async function ({ email }: { email: string }) {
    const baseHttp = createHttpClient();
    const response = await baseHttp.post<
      { email: string },
      ValidateEmailResponse
    >({ email: email }, "/users/check-email");
    return response;
  },
  getUserProfile: async function ({ userId }: { userId: any }) {
    const baseHttp = createHttpClient();
    const response = await baseHttp.get<UserResponse>(`/users/${userId}`);
    const { data } = response;
    return data[0];
  },
};
