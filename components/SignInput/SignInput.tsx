import { InputErrorMessageProps, InputTypes } from "./InputTypes";
import { InputErrorMessageComment } from "./constant";
import * as S from "./SignInputStyled";
import { useState } from "react";

function SignInput({
  inputTitle,
  inputType,
  validationCallBack,
  placeholder = "내용 입력",
}: {
  inputTitle: string;
  inputType: InputTypes;
  validationCallBack: (insertInputValue: string) => InputErrorMessageProps;
  placeholder?: string;
}) {
  const [isHidden, setIsHidden] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const [errorMessage, setErrorMessage] =
    useState<InputErrorMessageProps>("correctInsert");

  const handleHidden = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
    isHidden ? setPasswordType("text") : setPasswordType("password");
  };

  return (
    <S.InputContainer>
      <S.InputTitle>{inputTitle}</S.InputTitle>
      {inputType === "text" ? (
        <>
          <S.InputBox
            type={inputType}
            placeholder={placeholder}
            onBlur={(e) => {
              setErrorMessage(validationCallBack(e.target.value));
            }}
          />
        </>
      ) : (
        <>
          <S.InputBox
            type={passwordType}
            placeholder={placeholder}
            onBlur={(e) => {
              setErrorMessage(validationCallBack(e.target.value));
            }}
          />
          <S.InputHiddenButton type="button" onClick={handleHidden}>
            <S.InputHiddenIcon
              src={isHidden ? "/images/eye-on.svg" : "/images/eye-off.svg"}
            ></S.InputHiddenIcon>
          </S.InputHiddenButton>
        </>
      )}
      <S.InputErrorMessage>
        {InputErrorMessageComment[errorMessage]}
      </S.InputErrorMessage>
    </S.InputContainer>
  );
}

export default SignInput;
