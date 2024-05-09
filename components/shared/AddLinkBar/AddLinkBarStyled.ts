import { PrimaryButton } from "@styles/common/PrimaryButton";
import styled from "styled-components";

export const AddLinkContainer = styled.div<{ isFloating: boolean }>`
  background-color: var(--light-blue);
  width: 100%;
  padding: 3.75rem 20rem 5.625rem;
  display: flex;
  justify-content: space-evenly;

  ${({ isFloating }) =>
    isFloating
      ? "position : fixed; bottom : 0; left:0; right : 0; z-index : 2;"
      : ""}
`;

export const AddLinkBar = styled.div<{ isEmpty: boolean }>`
  background-color: var(--white);
  padding: 1.6rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
  border: 0.1rem solid
    ${({ isEmpty }) => (isEmpty ? "var(--red)" : "var(--primary)")};
  width: 80rem;
  border-radius: 1.5rem;

  @media (max-width: 768px) {
    width: 39rem;
    padding: 0.8rem 1rem;
  }
`;

export const AddLinkInputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

export const AddLinkIcon = styled.img`
  width: 2rem;
  height: 2rem;

  @media (max-width: 768px) {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const AddLinkInput = styled.input`
  color: var(--gray60);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.671rem;
  }
`;

export const AddInputButton = styled(PrimaryButton)`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.671rem;
  padding: 1rem 1.6rem;
`;
