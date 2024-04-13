import * as S from "./FolderContentStyled";
import { useEffect, useState, MouseEvent, useContext } from "react";
import { CategoryNav } from "../CategoryNav/CategoryNav";
import { FolderListDataForm, getFolderDataForm } from "../../../types/DataForm";
import { useRecoilValue } from "recoil";
import { searchState } from "recoil/SearchKeyWord";
import { getFolders } from "@data-access/getFolders";
import { AddFolderContent } from "@components/common/Modals/AddFolderContent";
import { SearchResultComment } from "@components/common/SearchResultComment";
import { Button } from "../CategoryButton/CategoryButtonStyled";
import { EmptyLink } from "@components/common/EmptyLink";
import { CardList } from "@components/common/CardList";
import { CardItem } from "@components/common/CardItem";
import { RefactorModal } from "@components/common/RefactorModal/RefactorModal";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";

interface LoadFolderDataProps {
  folderId: string;
  searchKeyWord: string;
}

export function FolderContent({ data }: { data: FolderListDataForm[] }) {
  const [folder, setFolder] = useState<getFolderDataForm[]>([]);
  const [folderId, setFolderId] = useState("");
  const [activeCategoryName, setActiveCategoryName] = useState("전체");
  const { handleModalState } = useContext(ModalContext);
  const searchKeyWord = useRecoilValue(searchState);

  const handleLoadFolder = async ({
    folderId,
    searchKeyWord,
  }: LoadFolderDataProps) => {
    const { data } = await getFolders(folderId);
    setFolder(data);

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

  const handleCategoryActive = (e: MouseEvent<HTMLButtonElement>) => {
    setActiveCategoryName((e.target as HTMLButtonElement).value);
    setFolderId((e.target as HTMLButtonElement).id);
  };

  const handleShowModal = () => {
    handleModalState({ isOpenModal: true, modalType: "addFolderContent" });
  };

  useEffect(() => {
    handleLoadFolder({ folderId, searchKeyWord });
  }, [folderId, searchKeyWord]);

  return (
    <>
      <RefactorModal />
      {searchKeyWord && <SearchResultComment searchKeyWord={searchKeyWord} />}

      <S.ClassificationContainer>
        <S.ClassificationButtons>
          <Button onClick={handleCategoryActive} id="" value="전체">
            전체
          </Button>
          {data.map((category) => (
            <Button
              onClick={handleCategoryActive}
              value={category.name}
              id={category.id as string}
              key={category.id}
            >
              {category.name}
            </Button>
          ))}
        </S.ClassificationButtons>
        <S.AddFolderButton type="button" onClick={handleShowModal}>
          폴더 추가 +
        </S.AddFolderButton>
      </S.ClassificationContainer>
      <CategoryNav
        activeCategoryName={activeCategoryName}
        folderId={folderId}
      />
      {!folder.length ? (
        <EmptyLink />
      ) : (
        <CardList>
          {folder?.map((link) => (
            <CardItem
              key={link?.id}
              url={link.url}
              image_source={link.image_source}
              description={link.description}
              created_at={link.created_at}
            />
          ))}
        </CardList>
      )}
    </>
  );
}
