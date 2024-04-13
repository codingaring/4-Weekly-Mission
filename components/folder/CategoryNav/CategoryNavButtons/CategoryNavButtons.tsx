import { MouseEvent, useContext, useState } from "react";
import { DELETE_ICON, RENAME_ICON, SHARED_ICON } from "./constant";
import * as S from "./CategoryNavButtonsStyled";
import Image from "next/image";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { RefactorModal } from "@components/common/RefactorModal/RefactorModal";

export function CategoryNavButtons({
  selectFolder,
  folderId,
}: {
  selectFolder: string;
  folderId: string;
}) {
  const { handleModalState } = useContext(ModalContext);

  const handleShowModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    switch (e.currentTarget.id) {
      case "sharedFolder":
        handleModalState({
          isOpenModal: true,
          modalType: "sharedFolder",
          selectFolder: selectFolder,
          selectFolderId: folderId,
        });
        break;
      case "renameModal":
        handleModalState({
          isOpenModal: true,
          modalType: "renameModal",
        });
        break;
      case "deleteFolder":
        handleModalState({
          isOpenModal: true,
          modalType: "deleteFolder",
          selectFolder: selectFolder,
        });
        break;
    }
  };

  return (
    <>
      <RefactorModal />
      <S.CategoryNavButton onClick={handleShowModal} id="sharedFolder">
        <S.NavButtonIconContainer>
          <Image fill src={SHARED_ICON} alt="공유하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>공유</p>
      </S.CategoryNavButton>
      <S.CategoryNavButton onClick={handleShowModal} id="renameModal">
        <S.NavButtonIconContainer>
          <Image fill src={RENAME_ICON} alt="이름 변경하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>이름 변경</p>
      </S.CategoryNavButton>
      <S.CategoryNavButton onClick={handleShowModal} id="deleteFolder">
        <S.NavButtonIconContainer>
          <Image fill src={DELETE_ICON} alt="삭제하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>삭제</p>
      </S.CategoryNavButton>
    </>
  );
}
