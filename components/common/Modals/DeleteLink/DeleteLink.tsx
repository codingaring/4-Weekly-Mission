import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import * as S from "./DeleteLinkStyled";
import { DeleteLinkProps } from "../ModalProp";

export default function DeleteLink({ deleteURL }: DeleteLinkProps) {
  return (
    <>
      <S.DeleteLinkURL>{deleteURL}</S.DeleteLinkURL>
      <ModalButtonRed type="button">삭제하기</ModalButtonRed>
    </>
  );
}
