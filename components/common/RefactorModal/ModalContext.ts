import { FolderListDataForm } from "../../../types/DataForm";
import React from "react";

export type ModalContextType = {
  modalStateProperty: {
    isOpenModal: boolean;
    selectURL: string;
    data: FolderListDataForm[] | undefined;
    selectFolder: string;
    modalType: string;
  };
  handleModalState: any;
};

export const ModalContextInitial: ModalContextType = {
  modalStateProperty: {
    isOpenModal: false,
    selectURL: "",
    data: [],
    selectFolder: "",
    modalType: "",
  },
  handleModalState: () => {},
};

export const ModalContext = React.createContext(ModalContextInitial);
