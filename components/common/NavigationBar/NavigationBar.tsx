import * as S from "./NavigationBarStyled";
import { Profile } from "./Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import { useRouter } from "next/router";
import { ROUTE } from "@util/constant";
import { getLoginUserInfo } from "@data-access/getLoginUserInfo";
import { useContext, useEffect } from "react";
import { UserContext } from "context/UserContext";
import { useQuery } from "@tanstack/react-query";

export const NavigationBar = () => {
  const { handleUserDataState } = useContext(UserContext);
  const Location = useRouter();
  const LocationPath = Location.pathname;
  const { data: profile } = useQuery({
    queryKey: ["loginUserProfile"],
    queryFn: getLoginUserInfo,
  });

  useEffect(() => {
    if (profile) {
      handleUserDataState({ isLogin: true, userId: profile.id });
    }
  }, [profile]);

  return (
    <S.NavigationBarContainer pathName={LocationPath}>
      <S.ItemsContainer>
        <a href={ROUTE.랜딩}>
          <S.Logo src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </a>
        {profile ? (
          <Profile
            userEmail={profile.email}
            userImgSource={profile.image_source}
          />
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
