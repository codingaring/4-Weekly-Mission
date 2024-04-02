import SignInput from "@components/SignInput";
import * as S from "./signinStyled";
import Link from "next/link";
import { InputErrorMessageProps } from "@components/SignInput/InputTypes";

export default function SignIn() {
  const emailInputValidate = (
    insertInputValue: string
  ): InputErrorMessageProps => {
    return insertInputValue === "" ? "emailEmpty" : "correctInsert";
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
            <a>
              <S.HeaderToLink>회원 가입하기</S.HeaderToLink>
            </a>
          </S.HeaderTextBox>
        </S.SigninHeader>
        <S.InputContainer>
          <SignInput
            inputType="text"
            inputTitle="이메일"
            validationCallBack={emailInputValidate}
          />
          <SignInput
            inputType="password"
            inputTitle="비밀번호"
            validationCallBack={emailInputValidate}
          />
        </S.InputContainer>
        <S.PrimaryButton type="submit">로그인</S.PrimaryButton>
        <S.SocialLoginBox>
          <span>소셜 로그인</span>
          <S.SnsIconsContainer>
            <a>
              <img src="/images/google.svg" alt="google login" />
            </a>
            <a>
              <img src="/images/kakaoTalk.svg" alt="kakaotalk login" />
            </a>
          </S.SnsIconsContainer>
        </S.SocialLoginBox>
      </S.SignInContainer>
    </S.SignInBody>
  );
}
