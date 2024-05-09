import { ModalInput } from "../ModalElements/ModalInput";
import Modal from "../Modal";
import { BaseModalProps } from "../ModalProp";
import { PrimaryButton } from "@styles/common/PrimaryButton";

export function AddFolder({ handleCloseModal }: BaseModalProps) {
  return (
    <Modal title={"폴더 추가"} handleCloseModal={handleCloseModal}>
      <ModalInput placeholder="내용 입력" type="text"></ModalInput>
      <PrimaryButton type="button">추가하기</PrimaryButton>
    </Modal>
  );
}
