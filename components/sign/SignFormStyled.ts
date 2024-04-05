import styled from "styled-components";
import { PrimaryButton } from "@styles/common/PrimaryButton";

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled(PrimaryButton)``;

export const InputTitle = styled.label`
  font-size: 1.4rem;
`;

export const InputBox = styled.input`
  margin-top: 1.2rem;
  border-radius: 0.8rem;
  padding: 1.8rem 1.5rem;
  padding-right: 3.6rem;
  border: 0.1rem solid var(--gray20);

  &:focus {
    border-color: var(--primary);
  }
`;

export const InputErrorMessage = styled.p`
  margin-top: 0.6rem;
  color: var(--red);
  font-size: 1.4rem;
  min-height: 2rem;
  margin-bottom: 2.4rem;
`;

export const InputHiddenButton = styled.button`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
  width: 1.6rem;
  height: 1.6rem;
`;

export const InputHiddenIcon = styled.img``;
