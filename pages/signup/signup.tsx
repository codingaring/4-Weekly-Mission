import Link from "next/link";
import * as S from "./signupStyled";
import SignInput from "@components/SignInput";

export default function Signup() {
  return (
    <S.SignupBody>
      <S.SignupContainer>
        <S.SignUpHeader>
          <Link href="/">
            <S.LinkbraryLogo src="/images/linkbrary.svg" alt="Linkbrary Logo" />{" "}
          </Link>
          <S.HeaderTextBox>
            <S.HeaderText>회원이신가요?</S.HeaderText>
            <Link href="/signin">
              <S.HeaderToLink>로그인 하기</S.HeaderToLink>
            </Link>
          </S.HeaderTextBox>
        </S.SignUpHeader>
        <S.InputContainer>
          {/* <SignInput
            inputTitle="이메일"
            inputName="email"
            inputType="text"
            placeholder="이메일을 입력해 주세요."
          /> */}
          {/* <SignInput />
          <SignInput /> */}
          <S.PrimaryButton type="submit">회원가입</S.PrimaryButton>
        </S.InputContainer>
        <S.SocialSignupBox>
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
        </S.SocialSignupBox>
      </S.SignupContainer>
    </S.SignupBody>
  );
}
