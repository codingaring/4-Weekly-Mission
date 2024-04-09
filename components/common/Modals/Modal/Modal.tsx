import ModalPortal from "@components/Portal";
import { ModalCloseButton } from "../ModalElements/ModalCloseButton";
import { ModalContainer } from "../ModalElements/ModalContainer";
import { ModalDim } from "../ModalElements/ModalDim";
import { ModalTitle } from "../ModalElements/ModalTitle";
import { ModalProps } from "../ModalProp";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { useContext, useState } from "react";

export default function Modal({ children, title }: ModalProps) {
  let showModalState = useContext(ModalContext);
  const [showModalControl, setShowModalControl] = useState(showModalState);

  function handleCloseModal() {
    setShowModalControl({
      ...showModalControl,
      isOpenModal: false,
    });
  }
  return (
    showModalControl.isOpenModal && (
      <ModalContext.Provider value={showModalControl}>
        <ModalPortal>
          <ModalDim onClick={handleCloseModal} />
          <ModalContainer>
            <ModalCloseButton handleModalClose={handleCloseModal} />
            <ModalTitle>{title}</ModalTitle>
            {children}
          </ModalContainer>
        </ModalPortal>
      </ModalContext.Provider>
    )
  );
}
