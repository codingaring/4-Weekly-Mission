import { ModalButtonRed } from "../ModalElements/ModalButtonRed";
import * as S from "./DeleteLinkStyled";
import { DeleteLinkProps } from "../ModalProp";
import Modal from "../Modal";
import { useMutation } from "@tanstack/react-query";
import { deleteLink } from "@data-access/deleteLink";
import { MouseEvent } from "react";

export default function DeleteLink({
  deleteURL,
  handleCloseModal,
  linkId,
}: DeleteLinkProps) {
  const deleteLinkMutation = useMutation({
    mutationFn: ({ linkId }: { linkId: number }) => deleteLink({ linkId }),
  });

  const handleDeleteLink = (event: MouseEvent<HTMLButtonElement>) => {
    deleteLinkMutation.mutate({ linkId: Number(event.currentTarget.id) });
  };

  return (
    <Modal title="삭제하기" handleCloseModal={handleCloseModal}>
      <S.DeleteLinkURL>{deleteURL}</S.DeleteLinkURL>
      <ModalButtonRed type="button" id={linkId} onClick={handleDeleteLink}>
        삭제하기
      </ModalButtonRed>
    </Modal>
  );
}
