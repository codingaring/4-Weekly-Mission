import { useContext } from "react";
import { AddFolderContent } from "../Modals/AddFolderContent";
import { AddToFolder } from "../Modals/AddToFolder";
import DeleteFolder from "../Modals/DeleteFolder";
import DeleteLink from "../Modals/DeleteLink";
import { RenameModal } from "../Modals/RenameModal";
import { SharedFolder } from "../Modals/SharedFolder/SharedFolder";
import { ModalContext } from "./ModalContext";
import Modal from "../Modals/Modal";

export function RefactorModal() {
  const { modalStateProperty } = useContext(ModalContext);
  const { modalType, isOpenModal, selectURL, selectFolder, data } =
    modalStateProperty;

  let modalContent;
  let modalTitle = "";

  switch (modalType) {
    case "deleteLink":
      modalContent = <DeleteLink deleteURL={selectURL} />;
      modalTitle = "링크 삭제";
      break;
    case "addToFolder":
      modalContent = <AddToFolder linkURL={selectURL} data={data} />;
      modalTitle = "폴더에 추가";
      break;
    case "addFolderContent":
      modalContent = <AddFolderContent />;
      modalTitle = "폴더 추가";
      break;
    case "sharedFolder":
      modalContent = <SharedFolder selectFolder={selectFolder} />;
      modalTitle = "폴더 공유";
      break;
    case "renameModal":
      modalContent = <RenameModal />;
      modalTitle = "폴더 이름 변경";
      break;
    case "deleteFolder":
      modalContent = <DeleteFolder selectFolder={selectFolder} />;
      modalTitle = "폴더 삭제";
      break;
    default:
      modalContent = <></>;
  }

  return isOpenModal ? <Modal title={modalTitle}>{modalContent}</Modal> : <></>;
}
