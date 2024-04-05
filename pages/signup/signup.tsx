import * as S from "../../styles/pages/signupStyled";
import { SignHeader } from "@components/sign/SignHeader";
import { SignToSNS } from "@components/sign/SignToSNS";
import { SignUpForm } from "@components/sign/signupForm/SignUpForm";

export default function Signup() {
  return (
    <S.SignupBody>
      <S.SignupContainer>
        <SignHeader pageType="signup" />
        <SignUpForm />
        <SignToSNS pageType="signup" />
      </S.SignupContainer>
    </S.SignupBody>
  );
}
