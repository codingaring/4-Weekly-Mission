import Link from "next/link";
import * as S from "./SignHeaderStyled";
import { PageTypeProps, SIGN_TEXT_CONTENTS } from "./constant";

export function SignHeader({ pageType }: PageTypeProps) {
  return (
    <S.SignHeaderContainer>
      <Link href="/">
        <S.LinkbraryLogo src="/images/linkbrary.svg" />
      </Link>
      <S.HeaderTextBox>
        <S.HeaderText>{SIGN_TEXT_CONTENTS[pageType].comment}</S.HeaderText>
        <Link href={SIGN_TEXT_CONTENTS[pageType].linkURL}>
          <S.HeaderToLink>
            {SIGN_TEXT_CONTENTS[pageType].linkText}
          </S.HeaderToLink>
        </Link>
      </S.HeaderTextBox>
    </S.SignHeaderContainer>
  );
}
