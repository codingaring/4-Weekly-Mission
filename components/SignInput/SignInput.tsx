import { InputTypes } from "./InputTypes";
import * as S from "./SignInputStyled";
import { useState } from "react";

function SignInput({
  inputTitle,
  inputType,
}: {
  inputTitle: string;
  inputType: InputTypes;
}) {
  const [isHidden, setIsHidden] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const handleHidden = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
    isHidden ? setPasswordType("text") : setPasswordType("password");
  };

  return inputType === "text" ? (
    <S.InputContainer>
      <S.InputTitle>{inputTitle}</S.InputTitle>
      <S.InputBox type={inputType} placeholder="내용 입력" />
      <S.InputErrorMessage></S.InputErrorMessage>
    </S.InputContainer>
  ) : (
    <S.InputContainer>
      <S.InputTitle>{inputTitle}</S.InputTitle>
      <S.InputBox type={passwordType} placeholder="내용 입력" />
      <S.InputHiddenButton type="button" onClick={handleHidden}>
        <S.InputHiddenIcon
          src={isHidden ? "/images/eye-on.svg" : "/images/eye-off.svg"}
        ></S.InputHiddenIcon>
      </S.InputHiddenButton>
      <S.InputErrorMessage></S.InputErrorMessage>
    </S.InputContainer>
  );
}

export default SignInput;
