import * as S from "./AddToFolderStyled";
import Modal from "../Modal";
import { AddToFolderProps } from "../ModalProp";
import { PrimaryButton } from "@styles/common/PrimaryButton";
import { useMutation } from "@tanstack/react-query";
import { postAddToFolder } from "@data-access/axios/postAddToFolder";
import { MouseEvent, useState } from "react";

export function AddToFolder({
  linkURL,
  folderList,
  handleCloseModal,
}: AddToFolderProps) {
  const [selectFolderId, setSelectFolderId] = useState<number>();
  const addToFolderMutation = useMutation({
    mutationFn: ({ url, folderId }: { url: string; folderId: number }) =>
      postAddToFolder({ url: url, folderId: folderId }),
  });

  const handleFolderId = (event: MouseEvent<HTMLButtonElement>) => {
    setSelectFolderId(Number(event.currentTarget.id));
  };

  const handleAddToFolder = async (event: MouseEvent<HTMLButtonElement>) => {
    if (linkURL && selectFolderId) {
      addToFolderMutation.mutate({ url: linkURL, folderId: selectFolderId });
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
