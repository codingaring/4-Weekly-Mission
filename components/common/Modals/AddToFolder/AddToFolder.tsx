import { ModalButtonBlue } from "../ModalElements/ModalButtonBlue";
import * as S from "./AddToFolderStyled";
import { AddToFolderProps } from "../ModalProp";

export function AddToFolder({ linkURL, data }: AddToFolderProps) {
  return (
    <>
      <S.SelectLink>{linkURL}</S.SelectLink>
      <S.FolderListContainer>
        {data?.map((folder) => (
          <S.SelectFolder key={folder.id}>
            <S.FolderName>{folder.name}</S.FolderName>
            <S.FolderCount>{folder.link.count}개 링크</S.FolderCount>
            <S.SelectFolderIcon />
          </S.SelectFolder>
        ))}
      </S.FolderListContainer>
      <ModalButtonBlue type="button">삭제하기</ModalButtonBlue>
    </>
  );
}
