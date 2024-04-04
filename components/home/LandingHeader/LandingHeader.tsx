import { HERO_IMAGE_SRC } from "../constant";
import * as S from "./LandingHeaderStyled";
import Image from "next/image";

export default function LandingHeader() {
  return (
    <S.LandingHeaderContainer>
      <S.HeroTitle>
        <S.HightLightText>세상의 모든 정보</S.HightLightText>를
        <S.WordBreak /> 쉽게 저장하고 관리해 보세요
      </S.HeroTitle>
      <S.LandingButton>링크 추가하기</S.LandingButton>
      <S.HeroImageBox>
        <Image fill src={HERO_IMAGE_SRC} alt="링크브러리 메인 화면" />
      </S.HeroImageBox>
    </S.LandingHeaderContainer>
  );
}
