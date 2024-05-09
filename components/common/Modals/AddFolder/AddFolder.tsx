import { ModalInput } from "../ModalElements/ModalInput";
import { ModalButtonBlue } from "../ModalElements/ModalButtonBlue";
import Modal from "../Modal";
import { BaseModalProps } from "../ModalProp";

export function AddFolder({ handleCloseModal }: BaseModalProps) {
  return (
    <Modal title={"폴더 추가"} handleCloseModal={handleCloseModal}>
      <ModalInput placeholder="내용 입력" type="text"></ModalInput>
      <ModalButtonBlue type="button">추가하기</ModalButtonBlue>
    </Modal>
  );
}
