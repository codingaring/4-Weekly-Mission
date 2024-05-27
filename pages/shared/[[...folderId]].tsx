import * as S from "@styles/pages/SharedStyled";
import { SearchBar } from "@components/common/SearchBar";
import { CardList } from "@components/common/CardList";
import { CardItem } from "@components/common/CardItem";
import { useRouter } from "next/router";
import Footer from "@components/common/Footer";
import { NavigationBar } from "@components/common/NavigationBar";
import { EmptyLink } from "@components/common/EmptyLink";
import { useQuery } from "@tanstack/react-query";
import FolderInfo from "@components/shared/AddLinkBar/FolderInfo";
import { DEFAULT_IMAGE } from "@components/common/CardImage/constant";
import { getFolderInfo } from "@data-access/getFolderInfo";
import { FolderContentsDataForm, getFolders } from "@data-access/getFolders";
import { getCategory } from "@data-access/getCategory";
import { authAPI } from "@data-access/authAPI";

function Shared() {
  const router = useRouter();
  const { folderId } = router.query;

  const { data: folderInfo } = useQuery({
    queryKey: ["folderInfo"],
    queryFn: async () => await getFolderInfo({ folderId: folderId }),
    enabled: !!folderId,
  });
  const userId = folderInfo && folderInfo?.user_id;
  const { data: folderOwnerInfo } = useQuery({
    queryKey: [`ownerProfile-${userId}`],
    queryFn: () => authAPI.getUserProfile({ userId: userId }),
    enabled: !!userId,
  });
  const { data: linksData } = useQuery({
    queryKey: [`folderContents-${folderId}`],
    queryFn: () => getFolders({ folderId: Number(folderId) }),
  });
  const { data: folderList } = useQuery({
    queryKey: ["folders"],
    queryFn: getCategory,
  });

  return (
    <>
      <NavigationBar />
      <S.SharedPageContainer>
        <FolderInfo
          profileImage={
            folderOwnerInfo ? folderOwnerInfo.image_source : DEFAULT_IMAGE
          }
          ownerName={folderOwnerInfo ? folderOwnerInfo.name : ""}
          folderName={folderInfo ? folderInfo.name : ""}
        />
        <S.SharedPageItems>
          <SearchBar />
          {linksData?.length !== 0 ? (
            <CardList>
              {linksData?.map((link: FolderContentsDataForm) => (
                <CardItem
                  folderId={link.id}
                  favorite={link.favorite}
                  linkId={Number(link.id)}
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
