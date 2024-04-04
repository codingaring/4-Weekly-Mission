import styled from "styled-components";
import Image from "next/image";

/** */
export const MainContainer = styled.div`
  position: relative;
  margin: 7rem 0;
`;

export const LandingSection = styled.section<{ direction?: string }>`
  margin: 5rem auto;
  width: 100rem;
  display: grid;
  grid-template:
    " ${({ direction }) => (direction === "right" ? "a b" : "b a")}" auto
    " ${({ direction }) => (direction === "right" ? "c b" : "b c")} " auto;
  column-gap: 15.7rem;

  @media screen and (max-width: 1199px) {
    width: 70rem;
    column-gap: 5.1rem;
  }

  @media screen and (max-width: 768px) {
    width: 32.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  width: 35rem;
  font-size: 4.8rem;
  font-weight: 700;
  letter-spacing: -0.03rem;
  grid-area: a;
  margin-bottom: 1rem;
  place-self: flex-end flex-end;

  @media screen and (max-width: 1199px) {
    width: auto;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
    place-self: flex-start;
  }
`;

export const PinkGradientText = styled.span`
  background: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const YellowToBlueGradientText = styled.span`
  background: linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const BlueGradientText = styled.span`
  background: linear-gradient(
    99deg,
    #6d7ccd 19.76%,
    rgba(82, 136, 133, 0.22) 52.69%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const MintGradientText = styled.span`
  background: var(
    --Fandom-K-gra-blue-to-pink,
    linear-gradient(271deg, #fe578f -9.84%, #68e8f9 107.18%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const LandingCard = styled(Image)``;

export const SectionDescription = styled.p`
  width: 35rem;
  color: #6b6b6b;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;
  grid-area: c;

  @media screen and (max-width: 1199px) {
    width: auto;
  }
`;

export const LandingCardImageBox = styled.div`
  position: relative;
  width: 55rem;
  height: 45rem;
  grid-area: b;

  @media screen and (max-width: 1199px) {
    width: 38.5rem;
    height: 31.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 32.5rem;
    height: 26.5rem;
  }
`;
