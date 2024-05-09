import { PrimaryButton } from "@styles/common/PrimaryButton";
import styled from "styled-components";

export const NavigationBarContainer = styled.header<{ pathName: string }>`
  display: flex;
  justify-content: center;
  ${({ pathName }) =>
    pathName === "/folder"
      ? `
          position: static;
        `
      : `
          position: sticky;
          top: 0;
        `}
  z-index: 1;
  width: 100%;
  background-color: var(--light-blue);
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: 1200px) {
    max-width: 192rem;
    padding: 0 20rem;
  }
`;

export const Logo = styled.img`
  height: 1.6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;

export const LoginText = styled.span`
  display: inline-block;
  width: 8rem;
  padding: 1rem 0;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  @media (min-width: 768px) {
    width: 12.8rem;
    padding: 1.6rem 0;
    font-size: 1.8rem;
  }
`;

export const LoginButton = styled(PrimaryButton)`
  padding: 0;
`;
