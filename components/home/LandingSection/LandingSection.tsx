import { SECTION_CONTENT } from "../constant";
import * as S from "./LandingSectionStyled";

export default function LandingSection() {
  return (
    <S.MainContainer>
      <S.LandingSection direction="right">
        <S.SectionTitle>
          <S.PinkGradientText>원하는 링크</S.PinkGradientText>를 저장하세요
        </S.SectionTitle>
        <S.LandingCardImageBox>
          <S.LandingCard
            fill
            src={SECTION_CONTENT.FIRST_SECTION.IMAGE_SRC}
            alt="링크 저장하는 이미지"
          />
        </S.LandingCardImageBox>
        <S.SectionDescription>
          {SECTION_CONTENT.FIRST_SECTION.DESCRIPTION}
        </S.SectionDescription>
      </S.LandingSection>
      <S.LandingSection>
        <S.SectionTitle>
          링크를
          <S.YellowToBlueGradientText>폴더</S.YellowToBlueGradientText>로
          관리하세요
        </S.SectionTitle>
        <S.LandingCardImageBox>
          <S.LandingCard
            fill
            src={SECTION_CONTENT.SECOND_SECTION.IMAGE_SRC}
            alt="링크 저장하는 이미지"
          />
        </S.LandingCardImageBox>
        <S.SectionDescription>
          {SECTION_CONTENT.SECOND_SECTION.DESCRIPTION}
        </S.SectionDescription>
      </S.LandingSection>
      <S.LandingSection direction="right">
        <S.SectionTitle>
          저장한 링크를 <S.BlueGradientText>공유</S.BlueGradientText>해 보세요
        </S.SectionTitle>
        <S.LandingCardImageBox>
          <S.LandingCard
            fill
            src={SECTION_CONTENT.THIRD_SECTION.IMAGE_SRC}
            alt="링크 저장하는 이미지"
          />
        </S.LandingCardImageBox>
        <S.SectionDescription>
          {SECTION_CONTENT.THIRD_SECTION.DESCRIPTION}
        </S.SectionDescription>
      </S.LandingSection>
      <S.LandingSection>
        <S.SectionTitle>
          저장한 링크를 <S.MintGradientText>검색</S.MintGradientText>해 보세요
        </S.SectionTitle>
        <S.LandingCardImageBox>
          <S.LandingCard
            fill
            src={SECTION_CONTENT.FOURTH_SECTION.IMAGE_SRC}
            alt="링크 저장하는 이미지"
          />
        </S.LandingCardImageBox>
        <S.SectionDescription>
          {SECTION_CONTENT.FOURTH_SECTION.DESCRIPTION}
        </S.SectionDescription>
      </S.LandingSection>
    </S.MainContainer>
  );
}
