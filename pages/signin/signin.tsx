import { InputErrorMessageProps } from "@components/common/SignInput/InputTypes";
import * as S from "../../styles/pagesStyledComponents/signinStyled";
import Link from "next/link";
import { useInputValue } from "@hooks/useInputValue";
import { useRouter } from "next/router";
import { EmailRegex } from "@util/regex/constant";
import { checkValidation } from "@util/checkValidationEmail";
import { FormEvent } from "react";
import { checkSignin } from "@data-access/checkSignin";
import SignInput from "@components/common/SignInput";

export default function SignIn() {
  const { insertValue: emailValue, onChange: emailChange } = useInputValue();
  const { insertValue: passwordValue, onChange: passwordChange } =
    useInputValue();
  const router = useRouter();
  const emailInputValidate = (
    insertInputValue: string
  ): InputErrorMessageProps => {
    if (insertInputValue === "") {
      return "emailEmpty";
    } else if (!checkValidation(EmailRegex, insertInputValue)) {
      return "validationEmail";
    }
    return "correctInsert";
  };

  const passwordInputValidate = (
    insertInputValue: string
  ): InputErrorMessageProps => {
    return insertInputValue === "" ? "passwordEmpty" : "correctInsert";
  };

  const handleSignSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValue: { email: string; password: string } = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      await checkSignin(inputValue);
      router.push("/folder");
    } catch {
      return;
    }
  };

  return (
    <S.SignInBody>
      <S.SignInContainer>
        <S.SigninHeader>
          <Link href="/">
            <S.LinkbraryLogo src="/images/linkbrary.svg" />
          </Link>
          <S.HeaderTextBox>
            <S.HeaderText>회원이 아니신가요?</S.HeaderText>
            <Link href="/signup">
              <S.HeaderToLink>회원 가입하기</S.HeaderToLink>
            </Link>
          </S.HeaderTextBox>
        </S.SigninHeader>
        <S.InputContainer onSubmit={handleSignSubmit}>
          <SignInput
            onChange={emailChange}
            value={emailValue}
            inputName="email"
            inputType="text"
            inputTitle="이메일"
            validationCallBack={emailInputValidate}
            placeholder="이메일을 입력해 주세요."
          />
          <SignInput
            onChange={passwordChange}
            value={passwordValue}
            inputName="password"
            inputType="password"
            inputTitle="비밀번호"
            validationCallBack={passwordInputValidate}
            placeholder="비밀번호를 입력해 주세요."
          />
          <S.PrimaryButton type="submit">로그인</S.PrimaryButton>
        </S.InputContainer>
        <S.SocialLoginBox>
          <span>소셜 로그인</span>
          <S.SnsIconsContainer>
            <Link href="https://www.google.com" target="_blank">
              <S.SnsIconBox>
                <S.SnsIcon fill src="/images/google.svg" alt="google login" />
              </S.SnsIconBox>
            </Link>
            <Link href="https://www.kakaocorp.com/page" target="_blank">
              <S.SnsIconBox>
                <S.SnsIcon
                  fill
                  src="/images/kakaoTalk.svg"
                  alt="kakaotalk login"
                />
              </S.SnsIconBox>
            </Link>
          </S.SnsIconsContainer>
        </S.SocialLoginBox>
      </S.SignInContainer>
    </S.SignInBody>
  );
}
