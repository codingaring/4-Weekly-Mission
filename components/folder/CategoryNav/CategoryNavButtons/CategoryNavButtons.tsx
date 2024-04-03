import { useState } from "react";
import { DELETE_ICON, RENAME_ICON, SHARED_ICON } from "./constant";
import * as S from "./CategoryNavButtonsStyled";
import Image from "next/image";
import { SharedFolder } from "@components/common/Modals/SharedFolder/SharedFolder";
import { RenameModal } from "@components/common/Modals/RenameModal";
import DeleteFolder from "@components/common/Modals/DeleteFolder";

export function CategoryNavButtons({ selectFolder }: { selectFolder: string }) {
  const [sharedModal, setSharedModal] = useState(false);
  const [renameModal, setRenameModal] = useState(false);
  const [deleteFolderModal, setDeleteFolderModal] = useState(false);

  const handleSharedModal = () => {
    setSharedModal(true);
  };

  const handleCloseModal = () => {
    setSharedModal(false);
    setRenameModal(false);
    setDeleteFolderModal(false);
  };

  const handleRenameModal = () => {
    setRenameModal(true);
  };

  const handleDeleteFolderModal = () => {
    setDeleteFolderModal(true);
  };

  return (
    <>
      {sharedModal && (
        <SharedFolder
          selectFolder={selectFolder}
          isOpenModal={sharedModal}
          handleModalClose={handleCloseModal}
        />
      )}
      {renameModal && (
        <RenameModal
          isOpenModal={renameModal}
          handleModalClose={handleCloseModal}
        />
      )}
      {deleteFolderModal && (
        <DeleteFolder
          isOpenModal={deleteFolderModal}
          handleModalClose={handleCloseModal}
          selectFolder={selectFolder}
        />
      )}
      <S.CategoryNavButton onClick={handleSharedModal}>
        <S.NavButtonIconContainer>
          <Image fill src={SHARED_ICON} alt="공유하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>공유</p>
      </S.CategoryNavButton>
      <S.CategoryNavButton onClick={handleRenameModal}>
        <S.NavButtonIconContainer>
          <Image fill src={RENAME_ICON} alt="이름 변경하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>이름 변경</p>
      </S.CategoryNavButton>
      <S.CategoryNavButton onClick={handleDeleteFolderModal}>
        <S.NavButtonIconContainer>
          <Image fill src={DELETE_ICON} alt="삭제하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>삭제</p>
      </S.CategoryNavButton>
    </>
  );
}
