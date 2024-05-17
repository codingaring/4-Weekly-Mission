import * as S from "./NavigationBarStyled";
import { Profile } from "./Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import { useRouter } from "next/router";
import { ROUTE } from "@util/constant";
import { getLoginUserInfo } from "@data-access/getLoginUserInfo";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "context/UserContext";
import { useQuery } from "@tanstack/react-query";

interface ProfileState {
  auth_id: string;
  email: string;
  image_source: string;
}

export const NavigationBar = () => {
  const { handleUserDataState } = useContext(UserContext);
<<<<<<< HEAD
  const [profile, setProfile] = useState<ProfileState>();
=======
>>>>>>> a23006954a5f04461317edcce92949be866d067c
  const Location = useRouter();
  const LocationPath = Location.pathname;
  const { data: profile } = useQuery({
    queryKey: ["loginUserProfile"],
    queryFn: getLoginUserInfo,
  });

<<<<<<< HEAD
  async function handleLoadUserInfo() {
    try {
      const { data } = await getLoginUserInfo();
      const { email, image_source, auth_id } = data[0] || [];
      setProfile({
        auth_id: auth_id,
        email: email,
        image_source: image_source,
      });
      handleUserDataState({ userId: auth_id });
    } catch (error) {
      console.error(Error);
=======
  useEffect(() => {
    if (profile) {
      handleUserDataState({ isLogin: true, userId: profile.id });
>>>>>>> a23006954a5f04461317edcce92949be866d067c
    }
  }, [handleUserDataState, profile]);

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
