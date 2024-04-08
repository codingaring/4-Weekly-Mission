import { checkSignin } from "@data-access/checkSignin";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../constant";
import * as S from "../SignFormStyled";
import { useEffectOnce } from "@hooks/useEffectOnce";

interface IFormInput {
  email: string;
  password: string;
}

export function SignForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormInput>({ mode: "onBlur" });
  const handleInputValue: SubmitHandler<IFormInput> = async (data) => {
    const inputValue = {
      email: data.email,
      password: data.password,
    };

    try {
      const token = await checkSignin(inputValue);
      router.push("/folder");
      window.localStorage.setItem("accessToken", token);
    } catch {
      setError("email", {
        message: "이메일을 확인해 주세요.",
      });
      setError("password", {
        message: "비밀번호를 확인해 주세요.",
      });
    }
  };

  function hasAccessToken() {
    const localStorageToken = localStorage.getItem("accessToken");
    if (localStorageToken === null) {
      return;
    } else {
      router.push("/folder");
    }
  }

  useEffectOnce(hasAccessToken);

  return (
    <S.InputContainer onSubmit={handleSubmit(handleInputValue)}>
      <S.InputTitle htmlFor="email">이메일</S.InputTitle>
      <S.InputBox
        id="email"
        type="email"
        placeholder="이메일을 입력해 주세요."
        {...register("email", {
          required: {
            value: true,
            message: "이메일을 입력해 주세요.",
          },
          pattern: {
            value: EMAIL_REGEX,
            message: "올바른 이메일 주소가 아닙니다.",
          },
        })}
        aria-invalid={errors.email ? "true" : "false"}
      />
      {errors.email ? (
        <S.InputErrorMessage>{errors.email.message}</S.InputErrorMessage>
      ) : (
        <S.InputErrorMessage></S.InputErrorMessage>
      )}
      <S.InputTitle htmlFor="password">비밀번호</S.InputTitle>
      <S.InputBox
        id="password"
        type="password"
        placeholder="비밀번호를 입력해 주세요."
        {...register("password", {
          required: {
            value: true,
            message: "비밀번호를 입력해 주세요.",
          },
        })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password ? (
        <S.InputErrorMessage>{errors.password.message}</S.InputErrorMessage>
      ) : (
        <S.InputErrorMessage></S.InputErrorMessage>
      )}
      <S.Button type="submit">로그인</S.Button>
    </S.InputContainer>
  );
}
