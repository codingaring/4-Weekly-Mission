import styled from "styled-components";
import { PrimaryButton } from "@styles/common/PrimaryButton";

export const LandingHeaderContainer = styled.div`
  padding-top: 4rem;
  background-color: var(--light-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const HeroTitle = styled.h1`
  color: #000;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 8rem;
  text-align: center;

  @media screen and (max-width: 1199px) {
    width: 47%;
  }

  @media screen and (max-width: 768px) {
    width: 78%;
    font-size: 3.2rem;
    line-height: 4.2rem;
  }
`;

export const WordBreak = styled.br`
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const HightLightText = styled.span`
  background: linear-gradient(91deg, var(--primary) 17.28%, #ff9f9f 74.98%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LandingButton = styled(PrimaryButton)`
  width: 35rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    width: 20rem;
  }
`;

export const HeroImageBox = styled.div`
  position: relative;
  width: 111.8rem;
  height: 65.9rem;

  @media screen and (max-width: 1199px) {
    width: 65rem;
    height: 38.3rem;
  }

  @media screen and (max-width: 768px) {
    width: 30rem;
    height: 17.8rem;
  }
`;
1;
