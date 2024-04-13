import * as S from "@styles/pages/SharedStyled";
import { SearchBar } from "@components/common/SearchBar";
import { CardList } from "@components/common/CardList";
import { useEffect, useState } from "react";
import { CardItem } from "@components/common/CardItem";
import { useRouter } from "next/router";
import FolderInfo from "@components/shared/AddLinkBar/FolderInfo";
import { getFolders } from "@data-access/getFolders";
import Footer from "@components/common/Footer";
import { getLoginUserInfo } from "@data-access/getLoginUserInfo";

function Shared() {
  const router = useRouter();
  const { folderId } = router.query;
  const [linkListData, setLinkListData] = useState();

  async function handleLoadLinks(folderIdQuery: string | string[] | undefined) {
    const { data } = await getFolders(folderIdQuery);
    setLinkListData(data);
  }

  async function handleLoadUserInfo() {
    const { data } = getLoginUserInfo();
  }

  useEffect(() => {
    handleLoadLinks(folderId);
    handleLoadUserInfo();
  }, [folderId]);

  return (
    <>
      <S.SharedPageContainer>
        <FolderInfo
          profileImage="fg"
          ownerName="dfdfdfd"
          folderName="asdfdfd"
        />
        <S.SharedPageItems>
          <SearchBar />
          <CardList>
            {linkListData &&
              linkListData.map((link) => (
                <CardItem
                  url={link.url}
                  image_source={link.image_source}
                  description={link.description}
                  created_at={link.created_at}
                  key={link?.id}
                />
              ))}
          </CardList>
        </S.SharedPageItems>
      </S.SharedPageContainer>
      <Footer />
    </>
  );
}

export default Shared;
