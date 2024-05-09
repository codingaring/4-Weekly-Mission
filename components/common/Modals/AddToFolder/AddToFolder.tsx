import * as S from "./AddToFolderStyled";
import Modal from "../Modal";
import { AddToFolderProps } from "../ModalProp";
import { PrimaryButton } from "@styles/common/PrimaryButton";

export function AddToFolder({
  linkURL,
  folderList,
  handleCloseModal,
}: AddToFolderProps) {
  return (
    <Modal handleCloseModal={handleCloseModal} title={"폴더에 추가"}>
      <S.SelectLink>{linkURL}</S.SelectLink>
      <S.FolderListContainer>
        {folderList?.map((folder) => (
          <S.SelectFolder key={folder.id}>
            <S.FolderName>{folder.name}</S.FolderName>
            <S.FolderCount>{folder.link.count}개 링크</S.FolderCount>
            <S.SelectFolderIcon />
          </S.SelectFolder>
        ))}
      </S.FolderListContainer>
      <PrimaryButton type="button">추가하기</PrimaryButton>
    </Modal>
  );
}
