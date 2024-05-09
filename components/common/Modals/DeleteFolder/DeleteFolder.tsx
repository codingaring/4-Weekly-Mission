import * as S from "./DeleteFolderStyled";
import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import { DeleteFolderProps } from "../ModalProp";
import Modal from "../Modal";

export default function DeleteFolder({
  selectFolder,
  handleCloseModal,
}: DeleteFolderProps) {
  return (
    <Modal title="폴더 삭제" handleCloseModal={handleCloseModal}>
      <S.DeleteFolderSubtitle>{selectFolder}</S.DeleteFolderSubtitle>
      <ModalButtonRed>삭제하기</ModalButtonRed>
    </Modal>
  );
}
