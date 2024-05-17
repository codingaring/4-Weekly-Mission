import * as S from "./NavigationBarStyled";
import { Profile } from "./Profile";
import { LOGO_IMAGE, TEXT } from "./constant";
import { useRouter } from "next/router";
import { ROUTE } from "@util/constant";
import { useEffectOnce } from "@hooks/useEffectOnce";
import { getLoginUserInfo } from "@data-access/getLoginUserInfo";
import { useContext, useState } from "react";
import { UserContext } from "context/UserContext";

export const NavigationBar = () => {
  const { handleUserDataState } = useContext(UserContext);
  const [profile, setProfile] = useState({
    auth_id: "",
    email: "",
    image_source: "",
  });
  const Location = useRouter();
  const LocationPath = Location.pathname;

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
    }
  }

  useEffectOnce(handleLoadUserInfo);

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
