import { useState, ChangeEvent, useContext } from "react";
import * as S from "./AddLinkBarStyled";
import { ADD_ICON } from "./constant";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { RefactorModal } from "@components/common/RefactorModal/RefactorModal";
import { FolderListDataForm } from "@data-access/getCategory";
import { useModal } from "@hooks/useModal";
import { AddToFolder } from "@components/common/Modals/AddToFolder";

export function AddLinkBar({
  folderInfo,
  isFloating = false,
}: {
  folderInfo: FolderListDataForm[];
  isFloating?: boolean;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState(false);
  const { isOpenModal, toggleModal } = useModal();
  const handleEmptyError = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEmpty(e.target.value === "" ? true : false);
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {isOpenModal && (
        <AddToFolder
          linkURL={inputValue}
          folderList={folderInfo}
          handleCloseModal={toggleModal}
        />
      )}
      <S.AddLinkContainer isFloating={isFloating}>
        <S.AddLinkBar isEmpty={isEmpty}>
          <S.AddLinkInputContainer>
            <S.AddLinkIcon src={ADD_ICON} alt="링크 추가하기 아이콘" />
            <S.AddLinkInput
              type="text"
              placeholder="링크를 추가해 보세요"
              onBlur={handleEmptyError}
              onChange={handleInputValue}
            />
          </S.AddLinkInputContainer>
          <S.AddInputButton onClick={toggleModal} disabled={isEmpty}>
            추가하기
          </S.AddInputButton>
        </S.AddLinkBar>
      </S.AddLinkContainer>
    </>
  );
}
