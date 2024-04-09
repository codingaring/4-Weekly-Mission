import { FolderListDataForm } from "../../../types/DataForm";
import React from "react";

export const ModalContextInitial: ModalContextType = {
  isOpenModal: false,
  selectURL: "",
  data: [],
  selectFolder: "",
  modalType: "",
};

export const ModalContext = React.createContext(ModalContextInitial);

export type ModalContextType = {
  isOpenModal: boolean;
  selectURL: string;
  data: FolderListDataForm[] | undefined;
  selectFolder: string;
  modalType: string;
};
