import ModalPortal from "@components/Portal";
import { ModalProps } from "../ModalProp";
import { ModalDim } from "../ModalElements/ModalDim";
import { ModalContainer } from "../ModalElements/ModalContainer";
import { ModalCloseButton } from "../ModalElements/ModalCloseButton";
import { ModalTitle } from "../ModalElements/ModalTitle";

export default function Modal({
  children,
  title,
  handleCloseModal,
}: ModalProps) {
  return (
    <ModalPortal>
      <ModalDim onClick={handleCloseModal} />
      <ModalContainer>
        <ModalCloseButton handleCloseModal={handleCloseModal} />
        <ModalTitle>{title}</ModalTitle>
        {children}
      </ModalContainer>
    </ModalPortal>
  );
}
