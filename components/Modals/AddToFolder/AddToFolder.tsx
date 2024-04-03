import { ModalButtonBlue } from "../ModalElements/ModalButtonBlue";
import Modal from "../Modal";
import * as S from "./AddToFolderStyled";
import { AddToFolderProps } from "../ModalProp";
import ModalPortal from "setting-files/Portal";

export function AddToFolder({
  isOpenModal,
  handleModalClose,
  linkURL,
  data,
}: AddToFolderProps) {
  return (
    <ModalPortal>
      <Modal
        title="폴더에 추가"
        isOpenModal={isOpenModal}
        handleModalClose={handleModalClose}
      >
        <S.SelectLink>{linkURL}</S.SelectLink>
        <S.FolderListContainer>
          {data?.map((folder) => (
            <S.SelectFolder key={folder.id}>
              <S.FolderName>{folder.name}</S.FolderName>
              <S.FolderCount>{folder.link.count}개 링크</S.FolderCount>
              <S.SelectFolderIcon />
            </S.SelectFolder>
          ))}
        </S.FolderListContainer>
        <ModalButtonBlue type="button">삭제하기</ModalButtonBlue>
      </Modal>
    </ModalPortal>
  );
}
