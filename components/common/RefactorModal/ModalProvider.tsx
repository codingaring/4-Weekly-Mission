import { ReactNode, useState } from "react";
import {
  ModalContext,
  ModalContextInitial,
  ModalContextType,
} from "./ModalContext";

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<
    ModalContextType["modalStateProperty"]
  >(ModalContextInitial["modalStateProperty"]);

  function handleModalState(
    newState: Partial<ModalContextType["modalStateProperty"]>
  ) {
    setModalState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  }

  const modalStateValue: ModalContextType = {
    modalStateProperty: modalState,
    handleModalState,
  };

  return (
    <ModalContext.Provider value={modalStateValue}>
      {children}
    </ModalContext.Provider>
  );
}
