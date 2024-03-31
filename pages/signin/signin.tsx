import SignInput from "@components/SignInput";
import * as S from "./signinStyled";
import { useState } from "react";
import Link from "next/link";
import { InputErrorMessageProps } from "@components/SignInput/InputTypes";

export default function SignIn() {
  const [signinErrorMessage, setSigninErrorMessage] =
    useState<InputErrorMessageProps>("correctInsert");

  const handleEmptyError = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setSigninErrorMessage("emailEmpty");
    }
  };

  return (
    <S.SignInContainer>
      <S.SigninHeader>
        <Link href="/">
          <S.LinkbraryLogo src="/images/linkbrary.svg" />
        </Link>
        <S.HeaderTextBox>
          <S.HeaderText>회원이 아니신가요?</S.HeaderText>
          <a>
            <S.HeaderToLink>회원 가입하기</S.HeaderToLink>
          </a>
        </S.HeaderTextBox>
      </S.SigninHeader>
      <S.InputContainer>
        <SignInput
          inputType="text"
          inputTitle="이메일"
          errorMessage={signinErrorMessage}
          validationCallBack={handleEmptyError}
        />
        {/* <SignInput inputType="password" inputTitle="비밀번호" /> */}
      </S.InputContainer>
      <button type="submit">로그인</button>
      <div>
        <span>소셜 로그인</span>
        <img src="/images/google.svg" />
        <img src="/images/kakaoTalk.svg" />
      </div>
    </S.SignInContainer>
  );
}
