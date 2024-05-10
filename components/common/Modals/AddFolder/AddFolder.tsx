import { ModalInput } from "../ModalElements/ModalInput";
import Modal from "../Modal";
import { BaseModalProps } from "../ModalProp";
import { PrimaryButton } from "@styles/common/PrimaryButton";
import { postNewFolder } from "@data-access/axios/postNewFolder";
import { useMutation } from "@tanstack/react-query";
import { useInputValue } from "@hooks/useInputValue";
import { MouseEvent } from "react";

export function AddFolder({ handleCloseModal }: BaseModalProps) {
  const { insertValue, onChange } = useInputValue();
  const createFolderMutation = useMutation({
    mutationFn: (createFolderName: string) =>
      postNewFolder({ folderName: createFolderName }),
  });

  const handleCreateNewFolder = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const createFolderName = insertValue;

    createFolderMutation.mutate(createFolderName);
    handleCloseModal(event);
  };

  return (
    <Modal title={"폴더 추가"} handleCloseModal={handleCloseModal}>
      <ModalInput
        value={insertValue}
        onChange={onChange}
        placeholder="내용 입력"
        type="text"
      ></ModalInput>
      <PrimaryButton type="button" onClick={handleCreateNewFolder}>
        추가하기
      </PrimaryButton>
    </Modal>
  );
}
