import { Modal } from "@components/Modals/Modal/Modal";
import { ModalButtonBlue } from "@components/Modals/ModalElements/ModalButtonBlue";
import { ModalInput } from "@components/Modals/ModalElements/ModalInput";
import { type BaseModalProps } from "interface/ModalProp";

export function AddFolderContent({
  isOpenModal,
  handleModalClose,
}: BaseModalProps) {
  return (
    <Modal
      title="폴더 추가"
      isOpenModal={isOpenModal}
      handleModalClose={handleModalClose}
    >
      <ModalInput placeholder="내용 입력" type="text"></ModalInput>
      <ModalButtonBlue type="button">추가하기</ModalButtonBlue>
    </Modal>
  );
}
