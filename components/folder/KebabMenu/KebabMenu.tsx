import { useContext } from "react";
import * as S from "./KebabMenuStyled";
import { MouseEvent } from "react";
import { FolderListDataForm } from "../../../types/DataForm";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { RefactorModal } from "@components/common/RefactorModal/RefactorModal";

interface Props {
  selectURL: string;
  data: FolderListDataForm[];
}

export function KebabMenu({ selectURL, data }: Props) {
  const { handleModalState } = useContext(ModalContext);

  const handleShowModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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
          data: data,
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
