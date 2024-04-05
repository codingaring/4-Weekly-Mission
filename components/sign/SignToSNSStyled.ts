import Image from "next/image";
import styled from "styled-components";

export const SignToSNSContainer = styled.div`
  background-color: var(--gray10);
  border: 0.1rem solid var(--gray20);
  border-radius: 0.8rem;
  padding: 1.2rem 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray100);
  font-size: 1.4rem;
  font-weight: 400;
`;

export const SignToSNSText = styled.span`
  color: var(--gray100);
  font-size: 1.4rem;
  font-weight: 400;
`;

export const SnsIconsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;

export const SnsIconBox = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  position: relative;
`;

export const SnsIcon = styled(Image)``;
