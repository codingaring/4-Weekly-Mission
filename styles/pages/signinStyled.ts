import styled from "styled-components";
import Image from "next/image";

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

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
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

export const SnsIconBox = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  position: relative;
`;

export const SnsIcon = styled(Image)``;

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
