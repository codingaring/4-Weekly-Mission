import { PrimaryButton } from "@styles/common/PrimaryButton";
import Modal from "../Modal";
import { ModalInput } from "../ModalElements/ModalInput";
import { RenameFolderProps } from "../ModalProp";
import { MouseEvent } from "react";
import { useInputValue } from "@hooks/useInputValue";
import { putRenameFolder } from "@data-access/putRenameFolder";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function RenameModal({
  handleCloseModal,
  selectFolderId,
}: RenameFolderProps) {
  const { insertValue, onChange } = useInputValue();
  const queryClient = useQueryClient();
  const renameFolderMutation = useMutation({
    mutationFn: ({
      folderId,
      folderTitle,
    }: {
      folderId: number;
      folderTitle: string;
    }) => putRenameFolder({ folderId, folderTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["folderList"] });
    },
  });

  async function handleRenameFolder(event: MouseEvent<HTMLButtonElement>) {
    if (insertValue) {
      renameFolderMutation.mutate({
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
