import * as S from "../styles/pages/SharedStyled";
import { useEffect, useState } from "react";
import {
  FolderListDataForm,
  FolderPageDataForm,
  LinkDataForm,
} from "../types/DataForm";
import { useRecoilValue } from "recoil";
import { getFolders } from "@data-access/getFolders";
import { searchState } from "recoil/SearchKeyWord";
import { Layout } from "@components/common/Layout";
import FolderInfo from "@components/shared/AddLinkBar/FolderInfo";
import { SearchBar } from "@components/common/SearchBar";
import { SearchResultComment } from "@components/common/SearchResultComment";
import { CardList } from "@components/common/CardList";
import { CardItem } from "@components/common/CardItem";
import { useGetFolder as getFolder } from "@data-access/useGetFolder";

function Shared() {
  const [folders, setFolders] = useState<FolderListDataForm[]>([]);
  const [folderInfo, setFolderInfo] = useState<FolderPageDataForm>();
  const [folderLinks, setFolderLinks] = useState<LinkDataForm[]>([]);
  const searchKeyWord = useRecoilValue(searchState);

  const handleLoadFolders = async (folderId = "") => {
    const { data } = await getFolders({ folderId });
    setFolders(data);
  };

  useEffect(() => {
    const handleLoadData = async () => {
      const { folder } = await getFolder<{ folder: FolderPageDataForm }>();
      setFolderInfo(folder);
      setFolderLinks(folder.links);

      if (searchKeyWord) {
        setFolderLinks((prevFolderLinks) =>
          prevFolderLinks?.filter(
            (link) =>
              link.description?.includes(searchKeyWord) ||
              link.url?.includes(searchKeyWord) ||
              link.title?.includes(searchKeyWord)
          )
        );
      }
    };
    handleLoadData();
    handleLoadFolders();
  }, [searchKeyWord]);

  return (
    <Layout>
      <S.SharedPageContainer>
        {folderInfo && (
          <FolderInfo
            profileImage={folderInfo.owner.profileImageSource}
            ownerName={folderInfo.owner.name}
            folderName={folderInfo.name}
          />
        )}
        <S.SharedPageItems>
          <SearchBar />
          {searchKeyWord && (
            <SearchResultComment searchKeyWord={searchKeyWord} />
          )}
          <CardList>
            {folderLinks &&
              folderLinks?.map((link) => (
                <CardItem
                  url={link.url}
                  image_source={link.imageSource}
                  description={link.description}
                  created_at={link.createdAt}
                  data={folders}
                  key={link?.id}
                />
              ))}
          </CardList>
        </S.SharedPageItems>
      </S.SharedPageContainer>
    </Layout>
  );
}

export default Shared;
