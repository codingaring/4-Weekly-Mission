import { FolderListDataForm } from "@data-access/axios/getCategory";
import { MouseEvent } from "react";

export interface BaseModalProps {
  handleCloseModal: (event: MouseEvent<HTMLElement>) => void;
}

export interface DeleteLinkProps extends BaseModalProps {
  deleteURL: string;
  linkId: number;
}

export interface DeleteFolderProps extends BaseModalProps {
  selectFolder: string;
  folderId: number;
}

export interface ModalProps extends BaseModalProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export interface AddToFolderProps extends BaseModalProps {
  linkURL: string | undefined;
  folderList: FolderListDataForm[] | undefined;
  handleReset: () => void;
}

export interface RenameFolderProps extends BaseModalProps {
  selectFolderId: number;
}

export interface SharedFolderProps extends BaseModalProps {
  selectFolder: string;
}
