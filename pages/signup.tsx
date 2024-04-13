import * as S from "../styles/pages/signupStyled";
import { SignHeader } from "@components/sign/SignHeader";
import { SignToSNS } from "@components/sign/SignToSNS";
import { SignUpForm } from "@components/sign/signupForm/SignUpForm";
import { useEffectOnce } from "@hooks/useEffectOnce";

function Signup() {
  function one() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }

  useEffectOnce(one);

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

export default Signup;
