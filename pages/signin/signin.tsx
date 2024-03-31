import SignInput from "@components/SignInput";
import * as S from "./signinStyled";

export default function SignIn() {
  return (
    <S.SignInContainer>
      <S.SigninHeader>
        <S.LinkbraryLogo src="/images/linkbrary.svg" />
        <S.HeaderTextBox>
          <S.HeaderText>회원이 아니신가요?</S.HeaderText>
          <a>
            <S.HeaderToLink>회원 가입하기</S.HeaderToLink>
          </a>
        </S.HeaderTextBox>
      </S.SigninHeader>
      <S.InputContainer>
        <SignInput inputType="text" inputTitle="이메일" />
        <SignInput inputType="password" inputTitle="비밀번호" />
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
