import { useContext, useState } from "react";
import * as S from "./KebabMenuStyled";
import { MouseEvent } from "react";
import { FolderListDataForm } from "../../../types/DataForm";
import DeleteLink from "@components/common/Modals/DeleteLink";
import { AddToFolder } from "@components/common/Modals/AddToFolder";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { RefactorModal } from "@components/common/RefactorModal/RefactorModal";

interface Props {
  selectURL: string;
  data: FolderListDataForm[];
}

export function KebabMenu({ selectURL, data }: Props) {
  const modalState = useContext(ModalContext);
  const [showModalState, setShowModalState] = useState(modalState);

  const handleShowModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (e.currentTarget.id) {
      case "deleteLink":
        setShowModalState({
          ...showModalState,
          isOpenModal: true,
          selectURL: selectURL,
          modalType: "deleteLink",
        });
        break;
      case "addToFolder":
        setShowModalState({
          ...showModalState,
          isOpenModal: true,
          selectURL: selectURL,
          data: data,
          modalType: "addToFolder",
        });
    }
  };

  return (
    <ModalContext.Provider value={showModalState}>
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
    </ModalContext.Provider>
  );
}
