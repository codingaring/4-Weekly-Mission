import { ROUTE } from "@util/constant";
import * as S from "./FooterStyled";
import { TEXT } from "./constant";
import { forwardRef } from "react";
import Link from "next/link";

const Footer = forwardRef(({}, ref) => {
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      <S.FooterContainer>
        <S.FooterItems>
          <S.FooterCopyright>{TEXT.codeit}</S.FooterCopyright>
          <S.FooterLinks>
            <S.FooterLink href={ROUTE.개인정보처리방침}>
              {TEXT.privacyPolicy}
            </S.FooterLink>
            <S.FooterLink href={ROUTE.FAQ}>{TEXT.faq}</S.FooterLink>
          </S.FooterLinks>
          <S.FooterSNS>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SnsIconBox>
                <S.FooterSnsIcon
                  fill
                  src="/images/facebook.svg"
                  alt="facebook 홈페이지로 연결된 facebook 로고"
                />
              </S.SnsIconBox>
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SnsIconBox>
                <S.FooterSnsIcon
                  fill
                  src="/images/twitter.svg"
                  alt="twitter 홈페이지로 연결된 twitter 로고"
                />
              </S.SnsIconBox>
            </Link>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SnsIconBox>
                <S.FooterSnsIcon
                  fill
                  src="/images/youtube.svg"
                  alt="youtube 홈페이지로 연결된 youtube 로고"
                />
              </S.SnsIconBox>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.SnsIconBox>
                <S.FooterSnsIcon
                  fill
                  src="/images/instagram.svg"
                  alt="instagram 홈페이지로 연결된 instagram 로고"
                />
              </S.SnsIconBox>
            </Link>
          </S.FooterSNS>
        </S.FooterItems>
      </S.FooterContainer>
    </div>
  );
});

Footer.displayName = "Footer";

export default Footer;
