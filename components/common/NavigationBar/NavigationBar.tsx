import * as S from "./NavigationBarStyled";
import { Profile } from "./Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import { useRouter } from "next/router";
import { ROUTE } from "@util/constant";

interface UserInfo {
  userInfo: {
    email: string;
    imageSource: string;
  };
}

export const NavigationBar = ({ userInfo }: UserInfo) => {
  const Location = useRouter();
  const LocationPath = Location.pathname;
  const { email, imageSource } = userInfo || {};

  return (
    <S.NavigationBarContainer pathName={LocationPath}>
      <S.ItemsContainer>
        <a href={ROUTE.랜딩}>
          <S.Logo src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </a>
        {email && imageSource ? (
          <Profile userEmail={email} userImgSource={imageSource} />
        ) : (
          <a href={ROUTE.로그인}>
            <S.LoginButton>
              <S.LoginText>{TEXT.LOGIN}</S.LoginText>
            </S.LoginButton>
          </a>
        )}
      </S.ItemsContainer>
    </S.NavigationBarContainer>
  );
};
