import * as S from "./AddToFolderStyled";
import Modal from "../Modal";
import { AddToFolderProps } from "../ModalProp";
import { PrimaryButton } from "@styles/common/PrimaryButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MouseEvent, useState } from "react";
import { postAddToFolder } from "@data-access/postAddToFolder";

export function AddToFolder({
  linkURL,
  folderList,
  handleCloseModal,
  handleReset,
}: AddToFolderProps) {
  const [selectFolderId, setSelectFolderId] = useState<number>();
  const queryClient = useQueryClient();
  const addToFolderMutation = useMutation({
    mutationFn: ({ url, folderId }: { url: string; folderId: number }) =>
      postAddToFolder({ url, folderId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`folderContents-${selectFolderId}`],
      });
    },
  });

  const handleFolderId = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectFolderId(Number(event.currentTarget.id));
  };

  const handleAddToFolder = async (event: MouseEvent<HTMLButtonElement>) => {
    if (linkURL && selectFolderId) {
      addToFolderMutation.mutate({ url: linkURL, folderId: selectFolderId });
      handleCloseModal(event);
      handleReset();
    }
  };

  return (
    <Modal handleCloseModal={handleCloseModal} title={"폴더에 추가"}>
      <S.SelectLink>{linkURL}</S.SelectLink>
      <S.FolderListContainer>
        {folderList?.map((folder) => (
          <S.SelectFolder
            id={folder.id}
            key={folder.id}
            onClick={handleFolderId}
          >
            <S.FolderName>{folder.name}</S.FolderName>
            <S.FolderCount>{folder.link_count}개 링크</S.FolderCount>
            <S.SelectFolderIcon />
          </S.SelectFolder>
        ))}
      </S.FolderListContainer>
      <PrimaryButton type="button" onClick={handleAddToFolder}>
        추가하기
      </PrimaryButton>
    </Modal>
  );
}
