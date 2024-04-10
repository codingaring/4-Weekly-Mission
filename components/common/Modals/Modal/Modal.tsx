import ModalPortal from "@components/Portal";
import { ModalCloseButton } from "../ModalElements/ModalCloseButton";
import { ModalContainer } from "../ModalElements/ModalContainer";
import { ModalDim } from "../ModalElements/ModalDim";
import { ModalTitle } from "../ModalElements/ModalTitle";
import { ModalProps } from "../ModalProp";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { useContext } from "react";

export default function Modal({ children, title }: ModalProps) {
  const { handleModalState } = useContext(ModalContext);
  function handleCloseModal() {
    handleModalState({
      isOpenModal: false,
    });
  }

  return (
    <ModalPortal>
      <ModalDim onClick={handleCloseModal} />
      <ModalContainer>
        <ModalCloseButton handleModalClose={handleCloseModal} />
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContainer>
    </ModalPortal>
  );
}
