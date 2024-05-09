import { FolderListDataForm } from "@data-access/getCategory";

export interface BaseModalProps {
  handleCloseModal: () => void;
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
  folderList: FolderListDataForm[];
}
