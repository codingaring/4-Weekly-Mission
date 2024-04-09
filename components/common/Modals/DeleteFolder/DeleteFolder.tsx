import * as S from "./DeleteFolderStyled";
import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import { DeleteFolderProps } from "../ModalProp";

export default function DeleteFolder({ selectFolder }: DeleteFolderProps) {
  return (
    <>
      <S.DeleteFolderSubtitle>{selectFolder}</S.DeleteFolderSubtitle>
      <ModalButtonRed>삭제하기</ModalButtonRed>
    </>
  );
}
