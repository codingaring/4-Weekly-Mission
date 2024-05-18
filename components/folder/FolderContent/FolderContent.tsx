import * as S from "./FolderContentStyled";
import { useEffect, useState, MouseEvent } from "react";
import { CategoryNav } from "../CategoryNav/CategoryNav";
import { useRecoilValue } from "recoil";
import { searchState } from "recoil/SearchKeyWord";
import { SearchResultComment } from "@components/common/SearchResultComment";
import { Button } from "../CategoryButton/CategoryButtonStyled";
import { EmptyLink } from "@components/common/EmptyLink";
import { CardList } from "@components/common/CardList";
import { CardItem } from "@components/common/CardItem";
import { useRouter } from "next/router";
import { usePortalContents } from "@hooks/usePortalContents";
import { AddFolder } from "@components/common/Modals/AddFolder";
import { useQuery } from "@tanstack/react-query";
import { getFolders } from "@data-access/getFolders";
import { FolderListDataForm } from "@data-access/getCategory";

interface LoadFolderDataProps {
  folderId: string;
  searchKeyWord: string;
}

interface FolderContents {
  id: number;
  favorite: boolean;
  created_at: string;
  url: string;
  title: string;
  image_source: string;
  description: string;
}

export function FolderContent({
  folderInfo,
}: {
  folderInfo: FolderListDataForm[] | undefined;
}) {
  const [folder, setFolder] = useState<FolderContents[]>([]);
  const [folderId, setFolderId] = useState("");
  const [activeCategoryName, setActiveCategoryName] = useState("전체");
  const searchKeyWord = useRecoilValue(searchState);
  const router = useRouter();
  const addFolderModal = usePortalContents();
  const { data: folderContents } = useQuery({
    queryKey: [`folderContents-${folderId}`],
    queryFn: () => getFolders({ folderId: Number(folderId) }),
  });

  const handleCategoryActive = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveCategoryName(e.currentTarget.value);
    setFolderId(e.currentTarget.id);
    const currentPath = "/folder";
    const folderPath = `${currentPath}/${e.currentTarget.id}`;
    router.push(folderPath);
  };

  useEffect(() => {
    const handleLoadFolder = async ({ searchKeyWord }: LoadFolderDataProps) => {
      if (folderContents) {
        setFolder(folderContents);
      }

      if (searchKeyWord) {
        setFolder((prevFolder) =>
          prevFolder.filter(
            (link) =>
              link.description?.includes(searchKeyWord) ||
              link.url?.includes(searchKeyWord) ||
              link.title?.includes(searchKeyWord)
          )
        );
      }
    };
    handleLoadFolder({ folderId, searchKeyWord });
  }, [folderId, searchKeyWord, folderContents]);

  return (
    <>
      {addFolderModal.isOpenModal && (
        <AddFolder handleCloseModal={addFolderModal.toggleContents} />
      )}
      {searchKeyWord && <SearchResultComment searchKeyWord={searchKeyWord} />}

      <S.ClassificationContainer>
        <S.ClassificationButtons>
          <Button
            isSelectCategory={activeCategoryName === "전체"}
            onClick={handleCategoryActive}
            value="전체"
          >
            전체
          </Button>
          {folderInfo &&
            folderInfo.map((category) => (
              <Button
                isSelectCategory={activeCategoryName === category.name}
                onClick={handleCategoryActive}
                value={category.name}
                id={category.id}
                key={category.id}
              >
                {category.name}
              </Button>
            ))}
        </S.ClassificationButtons>
        <S.AddFolderButton
          type="button"
          onClick={addFolderModal.toggleContents}
        >
          폴더 추가 +
        </S.AddFolderButton>
      </S.ClassificationContainer>
      <CategoryNav
        activeCategoryName={activeCategoryName}
        folderId={folderId}
      />
      <CardList>
        {folder && folder.length !== 0 ? (
          folder.map((link) => (
            <CardItem
              folderList={folderInfo}
              key={link.id}
              url={link.url}
              image_source={link.image_source}
              description={link.description}
              created_at={link.created_at}
              linkId={link.id}
              favorite={link.favorite}
              folderId={Number(folderId)}
            />
          ))
        ) : (
          <EmptyLink />
        )}
      </CardList>
    </>
  );
}
