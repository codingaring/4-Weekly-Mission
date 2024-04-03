import * as S from "./SharedStyled";
import { SearchBar } from "../../components/SearchBar";
import { CardList } from "../../components/CardList";
import { CardItem } from "../../components/CardItem";
import { getFolders } from "../../data-access/getFolders";
import { useEffect, useState } from "react";
import {
  FolderListDataForm,
  FolderPageDataForm,
  LinkDataForm,
} from "../../types/DataForm";
import { useRecoilValue } from "recoil";
import { searchState } from "../../recoil/SearchKeyWord";
import { SearchResultComment } from "../../components/SearchResultComment";
import FolderInfo from "./components/AddLinkBar/FolderInfo";
import { useGetFolder as getFolder } from "@data-access/useGetFolder";
import { Layout } from "@components/Layout";

export default function Shared() {
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
