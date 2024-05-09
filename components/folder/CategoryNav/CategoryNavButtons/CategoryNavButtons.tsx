import { DELETE_ICON, RENAME_ICON, SHARED_ICON } from "./constant";
import * as S from "./CategoryNavButtonsStyled";
import Image from "next/image";
import { usePortalContents } from "@hooks/usePortalContents";
import { RenameModal } from "@components/common/Modals/RenameModal";
import DeleteFolder from "@components/common/Modals/DeleteFolder";
import { SharedFolder } from "@components/common/Modals/SharedFolder/SharedFolder";

export function CategoryNavButtons({
  selectFolder,
  folderId,
}: {
  selectFolder: string;
  folderId: string;
}) {
  const shardFolderModal = usePortalContents();
  const renameModal = usePortalContents();
  const deleteFolderModal = usePortalContents();

  return (
    <>
      {shardFolderModal.isOpenModal && (
        <SharedFolder
          selectFolder={selectFolder}
          handleCloseModal={shardFolderModal.toggleModal}
        />
      )}
      {renameModal.isOpenModal && (
        <RenameModal handleCloseModal={renameModal.toggleModal} />
      )}
      {deleteFolderModal.isOpenModal && (
        <DeleteFolder
          selectFolder={selectFolder}
          handleCloseModal={deleteFolderModal.toggleModal}
        />
      )}
      <S.CategoryNavButton
        onClick={shardFolderModal.toggleModal}
        id="sharedFolder"
      >
        <S.NavButtonIconContainer>
          <Image fill src={SHARED_ICON} alt="공유하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>공유</p>
      </S.CategoryNavButton>
      <S.CategoryNavButton onClick={renameModal.toggleModal} id="renameModal">
        <S.NavButtonIconContainer>
          <Image fill src={RENAME_ICON} alt="이름 변경하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>이름 변경</p>
      </S.CategoryNavButton>
      <S.CategoryNavButton
        onClick={deleteFolderModal.toggleModal}
        id="deleteFolder"
      >
        <S.NavButtonIconContainer>
          <Image fill src={DELETE_ICON} alt="삭제하기를 나타내는 아이콘" />
        </S.NavButtonIconContainer>
        <p>삭제</p>
      </S.CategoryNavButton>
    </>
  );
}
