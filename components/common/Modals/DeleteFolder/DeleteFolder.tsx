import * as S from "./DeleteFolderStyled";
import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import { DeleteFolderProps } from "../ModalProp";
import Modal from "../Modal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MouseEvent } from "react";
import { deleteFolder } from "@data-access/deleteFolder";

export default function DeleteFolder({
  selectFolder,
  folderId,
  handleCloseModal,
}: DeleteFolderProps) {
  const queryClient = useQueryClient();
  const deleteFolderMutation = useMutation({
    mutationFn: ({ folderId }: { folderId: number | string }) =>
      deleteFolder({ folderId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["folderList"],
      });
    },
  });

  const handleDeleteFolder = (event: MouseEvent<HTMLButtonElement>) => {
    deleteFolderMutation.mutate({ folderId: folderId });
    handleCloseModal(event);
  };

  return (
    <Modal title="폴더 삭제" handleCloseModal={handleCloseModal}>
      <S.DeleteFolderSubtitle>{selectFolder}</S.DeleteFolderSubtitle>
      <ModalButtonRed onClick={handleDeleteFolder}>삭제하기</ModalButtonRed>
    </Modal>
  );
}
