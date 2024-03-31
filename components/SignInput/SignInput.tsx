import { InputErrorMessageProps, InputTypes } from "./InputTypes";
import { InputErrorMessageComment } from "./constant";
import * as S from "./SignInputStyled";
import { useState } from "react";

function SignInput({
  inputTitle,
  inputType,
  errorMessage,
  validationCallBack,
}: {
  inputTitle: string;
  inputType: InputTypes;
  errorMessage: InputErrorMessageProps;
  validationCallBack: (e: React.FocusEvent<HTMLInputElement>) => void;
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
      <S.InputBox
        type={inputType}
        placeholder="내용 입력"
        onBlur={validationCallBack}
      />
      <S.InputErrorMessage>
        {errorMessage ? InputErrorMessageComment[errorMessage] : ""}
      </S.InputErrorMessage>
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
      <S.InputErrorMessage>
        {errorMessage ? InputErrorMessageComment[errorMessage] : ""}
      </S.InputErrorMessage>
    </S.InputContainer>
  );
}

export default SignInput;
