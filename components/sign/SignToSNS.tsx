import Link from "next/link";
import * as S from "./SignToSNSStyled";
import { PageTypeProps, SIGN_TEXT_CONTENTS } from "./constant";

export function SignToSNS({ pageType }: PageTypeProps) {
  return (
    <S.SignToSNSContainer>
      <S.SignToSNSText>{SIGN_TEXT_CONTENTS[pageType].toSNS}</S.SignToSNSText>
      <S.SnsIconsContainer>
        <Link href="https://www.google.com" target="_blank">
          <S.SnsIconBox>
            <S.SnsIcon fill src="/images/google.svg" alt="google login" />
          </S.SnsIconBox>
        </Link>
        <Link href="https://www.kakaocorp.com/page" target="_blank">
          <S.SnsIconBox>
            <S.SnsIcon fill src="/images/kakaoTalk.svg" alt="kakaotalk login" />
          </S.SnsIconBox>
        </Link>
      </S.SnsIconsContainer>
    </S.SignToSNSContainer>
  );
}
