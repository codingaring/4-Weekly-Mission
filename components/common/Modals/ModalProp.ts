import { FolderListDataForm } from "@data-access/getCategory";
import { MouseEvent } from "react";

export interface BaseModalProps {
  isOpenModal?: boolean;
  handleModalClose: (e: MouseEvent<HTMLElement>) => void;
}

export interface DeleteLinkProps {
  deleteURL: string;
}

export interface DeleteFolderProps {
  selectFolder: string;
}

export interface ModalProps {
  handleCloseModal: () => void;
  children: JSX.Element | JSX.Element[];
  title: string;
}

export interface AddToFolderProps {
  handleCloseModal: () => void;
  linkURL: string | undefined;
  folderList: FolderListDataForm[];
}
