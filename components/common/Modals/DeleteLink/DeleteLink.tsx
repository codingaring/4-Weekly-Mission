import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import * as S from "./DeleteLinkStyled";
import { DeleteLinkProps } from "../ModalProp";
import Modal from "../Modal";

export default function DeleteLink({
  deleteURL,
  handleCloseModal,
}: DeleteLinkProps) {
  return (
    <Modal title="삭제하기" handleCloseModal={handleCloseModal}>
      <S.DeleteLinkURL>{deleteURL}</S.DeleteLinkURL>
      <ModalButtonRed type="button">삭제하기</ModalButtonRed>
    </Modal>
  );
}
