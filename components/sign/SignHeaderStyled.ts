import styled from "styled-components";

export const SignHeaderContainer = styled.div`
  width: 21rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const LinkbraryLogo = styled.img`
  width: 21rem;
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.p`
  font-size: 1.3rem;
  line-height: 2.4rem;
`;

export const HeaderToLink = styled.span`
  color: var(--primary);
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 0.4rem;
`;
