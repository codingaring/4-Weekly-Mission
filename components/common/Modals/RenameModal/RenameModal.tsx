import { PrimaryButton } from "@styles/common/PrimaryButton";
import Modal from "../Modal";
import { ModalInput } from "../ModalElements/ModalInput";
import { RenameFolderProps } from "../ModalProp";
import { MouseEvent } from "react";
import { useInputValue } from "@hooks/useInputValue";
import { putRenameFolder } from "@data-access/axios/putRenameFolder";

export function RenameModal({
  handleCloseModal,
  selectFolderId,
}: RenameFolderProps) {
  const { insertValue, onChange } = useInputValue();

  async function handleRenameFolder(event: MouseEvent<HTMLButtonElement>) {
    if (insertValue) {
      const result = await putRenameFolder({
        folderId: selectFolderId,
        folderTitle: insertValue,
      });
    }
    handleCloseModal(event);
  }

  return (
    <Modal title={"폴더 이름 변경"} handleCloseModal={handleCloseModal}>
      <ModalInput
        type="text"
        onChange={onChange}
        value={insertValue}
      ></ModalInput>
      <PrimaryButton type="button" onClick={handleRenameFolder}>
        변경하기
      </PrimaryButton>
    </Modal>
  );
}
