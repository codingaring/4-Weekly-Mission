import { FolderListDataForm } from "@data-access/axios/getCategory";
import { MouseEvent } from "react";

export interface BaseModalProps {
  handleCloseModal: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface DeleteLinkProps extends BaseModalProps {
  deleteURL: string;
}

export interface DeleteFolderProps extends BaseModalProps {
  selectFolder: string;
}

export interface ModalProps extends BaseModalProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export interface AddToFolderProps extends BaseModalProps {
  linkURL: string | undefined;
  folderList: FolderListDataForm[] | undefined;
}

export interface RenameFolderProps extends BaseModalProps {
  selectFolderId: number;
}
