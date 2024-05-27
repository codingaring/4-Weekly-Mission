import * as S from "./KebabMenuStyled";
import { usePortalContents } from "@hooks/usePortalContents";
import DeleteLink from "@components/common/Modals/DeleteLink";
import { AddToFolder } from "@components/common/Modals/AddToFolder";
import { FolderListDataForm } from "@data-access/getCategory";

interface KebabProps {
  selectURL: string;
  folderList: FolderListDataForm[];
  linkId: number;
}

export function KebabMenu({ selectURL, folderList, linkId }: KebabProps) {
  const deleteLinkModal = usePortalContents();
  const addToFolderModal = usePortalContents();

  return (
    <>
      {deleteLinkModal.isOpenModal && (
        <DeleteLink
          deleteURL={selectURL}
          handleCloseModal={deleteLinkModal.toggleContents}
          linkId={linkId}
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
        >
          삭제하기
        </S.CardContentKebabMenuDelete>
        <S.CardContentKebabMenuDelete
          type="button"
          onClick={addToFolderModal.toggleContents}
        >
          폴더에 추가
        </S.CardContentKebabMenuDelete>
      </S.CardContentKebabMenu>
    </>
  );
}
