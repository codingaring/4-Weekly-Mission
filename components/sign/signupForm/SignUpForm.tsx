import { checkSignup, checkValidationEmail } from "@data-access/checkSignup";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "../SignFormStyled";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constant";

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUpForm() {
  const router = useRouter();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onBlur",
  });

  const isConfirmPassword = async (insertEmail: { email: string }) => {
    try {
      await checkValidationEmail(insertEmail);
      return true;
    } catch {
      return "이미 사용 중인 이메일입니다.";
    }
  };

  const isConfirmPasswordRepeat = (insertPasswordRepeat: string) => {
    return getValues("password") === insertPasswordRepeat
      ? true
      : "비밀번호가 일치하지 않아요.";
  };

  const handleSignup: SubmitHandler<IFormInput> = async (data) => {
    const insertValue = {
      email: data.email,
      password: data.password,
    };

    try {
      await checkSignup(insertValue);
      router.push("/signin");
    } catch {
      return;
    }
  };

  return (
    <S.InputContainer onSubmit={handleSubmit(handleSignup)}>
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
          validate: async (value) => {
            const result = await isConfirmPassword({ email: value });
            return result;
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
        placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
        {...register("password", {
          required: {
            value: true,
            message: "비밀번호를 입력해 주세요.",
          },
          pattern: {
            value: PASSWORD_REGEX,
            message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
          },
        })}
        aria-invalid={errors.password ? "true" : "false"}
      />
      {errors.password ? (
        <S.InputErrorMessage>{errors.password.message}</S.InputErrorMessage>
      ) : (
        <S.InputErrorMessage></S.InputErrorMessage>
      )}
      <S.InputTitle htmlFor="confirmPassword">비밀번호 확인</S.InputTitle>
      <S.InputBox
        id="confirmPassword"
        type="password"
        placeholder="비밀번호와 일치하는 값을 입력해 주세요."
        {...register("confirmPassword", {
          required: {
            value: true,
            message: "비밀번호가 일치하지 않아요.",
          },
          validate: (value) => {
            const result = isConfirmPasswordRepeat(value);
            return result;
          },
        })}
        aria-invalid={errors.confirmPassword ? "true" : "false"}
      />
      {errors.confirmPassword ? (
        <S.InputErrorMessage>
          {errors.confirmPassword.message}
        </S.InputErrorMessage>
      ) : (
        <S.InputErrorMessage></S.InputErrorMessage>
      )}
      <S.Button type="submit">회원가입</S.Button>
    </S.InputContainer>
  );
}
