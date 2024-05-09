import { PrimaryButton } from "@styles/common/PrimaryButton";
import Modal from "../Modal";
import { ModalInput } from "../ModalElements/ModalInput";
import { BaseModalProps } from "../ModalProp";

export function RenameModal({ handleCloseModal }: BaseModalProps) {
  return (
    <Modal title={"폴더 이름 변경"} handleCloseModal={handleCloseModal}>
      <ModalInput type="text"></ModalInput>
      <PrimaryButton type="button">변경하기</PrimaryButton>
    </Modal>
  );
}
