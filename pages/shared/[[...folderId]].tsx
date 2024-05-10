import * as S from "@styles/pages/SharedStyled";
import { SearchBar } from "@components/common/SearchBar";
import { CardList } from "@components/common/CardList";
import { useEffect, useState } from "react";
import { CardItem } from "@components/common/CardItem";
import { useRouter } from "next/router";
import Footer from "@components/common/Footer";
import { NavigationBar } from "@components/common/NavigationBar";
import { EmptyLink } from "@components/common/EmptyLink";
import { getFolderDataForm } from "../../types/DataForm";
import { useQuery } from "@tanstack/react-query";
import { getFolderInfo } from "@data-access/axios/getFolderInfo";
import { getUserProfile } from "@data-access/axios/getUserProfile";
import { getFolders } from "@data-access/axios/getFolders";
import { getCategory } from "@data-access/axios/getCategory";
import { useEffectOnce } from "@hooks/useEffectOnce";
import FolderInfo from "@components/shared/AddLinkBar/FolderInfo";

function Shared() {
  const router = useRouter();
  const { folderId } = router.query;
  const [folderIdNumber, setFolderIdNumber] = useState<string | string[]>("");

  const [linkListData, setLinkListData] = useState<getFolderDataForm[]>();
  const { data: folderInfo } = useQuery({
    queryKey: ["folderInfo"],
    queryFn: async () => await getFolderInfo({ folderId: folderIdNumber }),
    enabled: !!folderId,
  });
  const userId = folderInfo && folderInfo.use_id;
  const { data: folderOwnerInfo } = useQuery({
    queryKey: ["ownerProfile"],
    queryFn: () => getUserProfile({ userId: userId }),
    enabled: !!userId,
  });
  const { data: linksData, isSuccess } = useQuery({
    queryKey: ["folderContents", folderId],
    queryFn: () => getFolders({ folderId: Number(folderIdNumber) }),
  });
  const { data: folderList } = useQuery({
    queryKey: ["folders"],
    queryFn: getCategory,
  });

  useEffect(() => {
    const handleLoadContents = async () => {
      if (isSuccess) {
        setLinkListData(linksData);
      }

      if (folderId) {
        setFolderIdNumber(folderId);
      }
    };
    handleLoadContents();
  }, [folderId]);

  return (
    <>
      <NavigationBar />
      <S.SharedPageContainer>
        {/* <FolderInfo
          profileImage={folderOwnerInfo.image_source}
          ownerName={folderOwnerInfo.name}
          folderName={folderInfo ? folderInfo.name : ""}
        /> */}
        <S.SharedPageItems>
          <SearchBar />
          {linkListData?.length !== 0 ? (
            <CardList>
              {linkListData?.map((link) => (
                <CardItem
                  folderList={folderList}
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
