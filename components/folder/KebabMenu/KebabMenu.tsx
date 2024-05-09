import { useState } from "react";
import * as S from "./KebabMenuStyled";
import { MouseEvent } from "react";
import { getCategory } from "@data-access/getCategory";
import { useModal } from "@hooks/useModal";
import DeleteLink from "@components/common/Modals/DeleteLink";
import { AddToFolder } from "@components/common/Modals/AddToFolder";

interface Props {
  selectURL: string;
}

export function KebabMenu({ selectURL }: Props) {
  const [categoryList, setCategoryList] = useState();
  const deleteLinkModal = useModal();
  const addToFolderModal = useModal();

  const handleShowModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const handleCategoryList = () => {
      const { data }: any = getCategory();
      setCategoryList(data);
    };

    handleCategoryList();
  };

  return (
    <>
      {deleteLinkModal.isOpenModal && (
        <DeleteLink
          deleteURL={selectURL}
          handleCloseModal={deleteLinkModal.toggleModal}
        />
      )}
      {addToFolderModal.isOpenModal && (
        <AddToFolder
          handleCloseModal={addToFolderModal.toggleModal}
          linkURL={selectURL}
          folderList={categoryList!}
        />
      )}
      <S.CardContentKebabMenu>
        <S.CardContentKebabMenuDelete
          type="button"
          onClick={handleShowModal}
          id="deleteLink"
        >
          삭제하기
        </S.CardContentKebabMenuDelete>
        <S.CardContentKebabMenuDelete
          type="button"
          onClick={handleShowModal}
          id="addToFolder"
        >
          폴더에 추가
        </S.CardContentKebabMenuDelete>
      </S.CardContentKebabMenu>
    </>
  );
}
