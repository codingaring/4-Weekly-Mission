import {
  ContextInitialValue,
  ShowModalContext,
} from "@components/common/RefactorModal/ModalContext";
import { ModalContextType } from "@components/common/RefactorModal/RefactorModalTypes";
import { FolderListDataForm } from "@types/DataForm";
import { MouseEvent, useState } from "react";

export function checkModalType(
  e: MouseEvent<HTMLButtonElement>,
  selectURL : string,
  linkURL : string,
  data : FolderListDataForm
) {
  const [modalContext, setModalContext] = useState(setModalState);

  switch (e.currentTarget.id) {
    case "deleteLink": {
      setModalContext({
        ...setModalState,
        isOpenModal: true,
        modalTitle: "링크 삭제",
        modalType: "deleteLink",
        selectURL :
      });
      break;
    }
    case "addToFolder": {
      setModalContext(setModalState);
      break;
    }
    case "addFolderContent": {
      setModalContext(setModalState);
      break;
    }
    case "sharedFolder": {
      setModalContext(setModalState);
      break;
    }
    case "renameModal": {
      setModalContext(setModalState);
      break;
    }
    case "deleteFolder": {
      setModalContext(setModalState);
      break;
    }
  }

  return { modalContext };
}
