import * as S from "./ModalFolderStyled";

interface ModalFolderListProp {
  folderList: number;
  title: string;
}

export const ModalFolderList = ({ folderList, title }: ModalFolderListProp) => {
  return (
    <S.TitleContainer>
      <S.SubTitle>{title}</S.SubTitle>
      <S.FolderCount>{folderList}개 링크</S.FolderCount>
      <S.SelectFolderIcon />
    </S.TitleContainer>
  );
};
