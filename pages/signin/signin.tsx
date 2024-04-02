import SignInput from "@components/SignInput";
import * as S from "./signinStyled";
import Link from "next/link";
import { InputErrorMessageProps } from "@components/SignInput/InputTypes";
import { checkValidationEmail } from "@util/checkValidationEmail";

export default function SignIn() {
  const emailInputValidate = (
    insertInputValue: string
  ): InputErrorMessageProps => {
    if (insertInputValue === "") {
      return "emailEmpty";
    } else if (!checkValidationEmail(insertInputValue)) {
      return "validationEmail";
    }
    return "correctInsert";
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
        <S.InputContainer>
          <SignInput
            inputType="text"
            inputTitle="이메일"
            validationCallBack={emailInputValidate}
            placeholder="이메일을 입력해 주세요."
          />
          <SignInput
            inputType="password"
            inputTitle="비밀번호"
            validationCallBack={emailInputValidate}
            placeholder="비밀번호를 입력해 주세요."
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
