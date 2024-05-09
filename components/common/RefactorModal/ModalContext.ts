import { FolderListDataForm } from "@data-access/getCategory";
import React from "react";

export type ModalContextType = {
  modalStateProperty: {
    isOpenModal: boolean;
    selectURL: string;
    data: FolderListDataForm[] | undefined;
    selectFolder: string;
    modalType: string;
    selectFolderId: string;
  };
  handleModalState: (
    newState: Partial<ModalContextType["modalStateProperty"]>
  ) => void;
};

export const ModalContextInitial: ModalContextType = {
  modalStateProperty: {
    isOpenModal: false,
    selectURL: "",
    data: [],
    selectFolder: "",
    modalType: "",
    selectFolderId: "",
  },
  handleModalState: () => {},
};

export const ModalContext = React.createContext(ModalContextInitial);
