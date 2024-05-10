import * as S from "./KebabMenuStyled";
import { usePortalContents } from "@hooks/usePortalContents";
import DeleteLink from "@components/common/Modals/DeleteLink";
import { AddToFolder } from "@components/common/Modals/AddToFolder";
import { FolderListDataForm } from "@data-access/axios/getCategory";

interface KebabProps {
  selectURL: string;
  folderList: FolderListDataForm[];
}

export function KebabMenu({ selectURL, folderList }: KebabProps) {
  const deleteLinkModal = usePortalContents();
  const addToFolderModal = usePortalContents();

  return (
    <>
      {deleteLinkModal.isOpenModal && (
        <DeleteLink
          deleteURL={selectURL}
          handleCloseModal={deleteLinkModal.toggleContents}
        />
      )}
      {addToFolderModal.isOpenModal && (
        <AddToFolder
          handleCloseModal={addToFolderModal.toggleContents}
          linkURL={selectURL}
          folderList={folderList}
        />
      )}
      <S.CardContentKebabMenu>
        <S.CardContentKebabMenuDelete
          type="button"
          onClick={deleteLinkModal.toggleContents}
          id="deleteLink"
        >
          삭제하기
        </S.CardContentKebabMenuDelete>
        <S.CardContentKebabMenuDelete
          type="button"
          onClick={addToFolderModal.toggleContents}
          id="addToFolder"
        >
          폴더에 추가
        </S.CardContentKebabMenuDelete>
      </S.CardContentKebabMenu>
    </>
  );
}
