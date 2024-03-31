import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const InputTitle = styled.p`
  font-size: 1.4rem;
`;

export const InputBox = styled.input`
  border-radius: 0.8rem;
  padding: 1.8rem 1.5rem;
  padding-right: 3.6rem;
  border: 0.1rem solid var(--gray20);

  &:focus {
    border-color: var(--primary);
  }
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

export const InputErrorMessage = styled.p`
  color: var(--red);
  font-size: 1.4rem;
  height: 1.8rem;
`;
