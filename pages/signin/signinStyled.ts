import styled from "styled-components";

export const SignInBody = styled.div`
  height: 100vh;
  background-color: var(--light-blue);
  position: relative;
`;

export const SignInContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const SigninHeader = styled.div`
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

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export const PrimaryButton = styled.button`
  padding: 1.6rem 2rem;
  color: var(--gray-light);
  font-size: 1.8rem;
  font-weight: 600;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
`;

export const SocialLoginBox = styled.div`
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

export const SnsIconsContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
`;
