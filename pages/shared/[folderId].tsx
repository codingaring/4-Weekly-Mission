import * as S from "@styles/pages/SharedStyled";
import { SearchBar } from "@components/common/SearchBar";
import { CardList } from "@components/common/CardList";
import { useEffect, useState } from "react";
import { CardItem } from "@components/common/CardItem";
import { useRouter } from "next/router";
import FolderInfo from "@components/shared/AddLinkBar/FolderInfo";
import Footer from "@components/common/Footer";
import { NavigationBar } from "@components/common/NavigationBar";
import { getFolderInfo } from "@data-access/getFolderInfo";
import { getUserProfile } from "@data-access/getUserProfile";
import { getFolderList } from "@data-access/getFolderList";
import { EmptyLink } from "@components/common/EmptyLink";

function Shared() {
  const router = useRouter();
  const { folderId } = router.query;
  const [linkListData, setLinkListData] = useState();
  const [folderInfo, setFolderInfo] = useState({
    user_id: "",
    folderName: "",
  });
  const [folderOwnerProfile, setFolderOwnerProfile] = useState({
    ownerName: "",
    profileImage: "",
  });

  async function handleLoadUserInfo(
    folderIdQuery: string | string[] | undefined,
    userId: string
  ) {
    try {
      const { data } = await getFolderInfo(folderIdQuery);
      const { user_id, name } = data[0];
      setFolderInfo({
        user_id: user_id,
        folderName: name,
      });
    } catch (error) {
      console.log(error.message);
    }

    try {
      const { data } = await getUserProfile(folderInfo.user_id);
      const { image_source, name } = data[0];
      setFolderOwnerProfile({
        ownerName: name,
        profileImage: image_source,
      });
    } catch (error) {
      console.log(error.message);
    }

    try {
      const { data } = await getFolderList(folderIdQuery, userId);
      setLinkListData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    handleLoadUserInfo(folderId, folderInfo.user_id);
  }, [folderId, folderInfo.user_id]);

  return (
    <>
      <NavigationBar />
      <S.SharedPageContainer>
        <FolderInfo
          profileImage={folderOwnerProfile.profileImage}
          ownerName={folderOwnerProfile.ownerName}
          folderName={folderInfo.folderName}
        />
        <S.SharedPageItems>
          <SearchBar />
          {linkListData?.length !== 0 ? (
            <CardList>
              {linkListData?.map((link) => (
                <CardItem
                  url={link.url}
                  image_source={link.image_source}
                  description={link.description}
                  created_at={link.created_at}
                  key={link?.id}
                />
              ))}
            </CardList>
          ) : (
            <EmptyLink />
          )}
        </S.SharedPageItems>
      </S.SharedPageContainer>
      <Footer />
    </>
  );
}

export default Shared;
