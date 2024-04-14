import { useContext, useEffect, useState } from "react";
import * as S from "./KebabMenuStyled";
import { MouseEvent } from "react";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { RefactorModal } from "@components/common/RefactorModal/RefactorModal";
import { getCategory } from "@data-access/getCategory";
import { useEffectOnce } from "@hooks/useEffectOnce";

interface Props {
  selectURL: string;
}

export function KebabMenu({ selectURL }: Props) {
  const [categoryList, setCategoryList] = useState();
  const { handleModalState } = useContext(ModalContext);

  const handleShowModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const handleCategoryList = () => {
      const { data }: any = getCategory();
      setCategoryList(data);
    };

    handleCategoryList();

    switch (e.currentTarget.id) {
      case "deleteLink":
        handleModalState({
          isOpenModal: true,
          selectURL: selectURL,
          modalType: "deleteLink",
        });
        break;
      case "addToFolder":
        handleModalState({
          isOpenModal: true,
          selectURL: selectURL,
          data: categoryList,
          modalType: "addToFolder",
        });
    }
  };

  return (
    <>
      <RefactorModal />
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
