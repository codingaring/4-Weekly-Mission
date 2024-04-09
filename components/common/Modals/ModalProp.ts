import { MouseEvent } from "react";
import { FolderListDataForm } from "../../../types/DataForm";

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
  children: JSX.Element | JSX.Element[];
  title: string;
}

export interface AddToFolderProps {
  linkURL: string | undefined;
  data: FolderListDataForm[] | undefined;
}
