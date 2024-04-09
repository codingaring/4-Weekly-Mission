import Modal from "../Modal";
import { ModalButtonBlue } from "../ModalElements/ModalButtonBlue";
import { ModalInput } from "../ModalElements/ModalInput";
import { BaseModalProps } from "../ModalProp";

export function RenameModal() {
  return (
    <>
      <ModalInput type="text"></ModalInput>
      <ModalButtonBlue type="button">변경하기</ModalButtonBlue>
    </>
  );
}
