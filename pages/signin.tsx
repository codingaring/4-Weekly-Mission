import * as S from "../styles/pages/signinStyled";
import { SignForm } from "@components/sign/signinForm/SignInForm";
import { SignHeader } from "@components/sign/SignHeader";
import { SignToSNS } from "@components/sign/SignToSNS";
import { getUserInfo } from "@data-access/axios/getUserInfo";

function SignIn() {
  console.log(getUserInfo());
  return (
    <S.SignInBody>
      <S.SignInContainer>
        <SignHeader pageType="signin" />
        <SignForm />
        <SignToSNS pageType="signin" />
      </S.SignInContainer>
    </S.SignInBody>
  );
}

export default SignIn;
