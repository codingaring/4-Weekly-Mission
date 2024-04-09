import { useState, ChangeEvent, useContext } from "react";
import * as S from "./AddLinkBarStyled";
import { ADD_ICON } from "./constant";
import { FolderListDataForm } from "../../../types/DataForm";
import { ModalContext } from "@components/common/RefactorModal/ModalContext";
import { RefactorModal } from "@components/common/RefactorModal/RefactorModal";

export function AddLinkBar({
  data,
  isFloating = false,
}: {
  data: FolderListDataForm[];
  isFloating?: boolean;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isEmpty, setIsEmpty] = useState(false);
  const contextState = useContext(ModalContext);
  const [isShowModal, setIsShowModal] = useState(contextState);

  const handleEmptyError = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEmpty(e.target.value === "" ? true : false);
  };

  const handleAddToFolder = () => {
    setIsShowModal({
      ...isShowModal,
      isOpenModal: true,
      selectURL: inputValue,
      data: data,
      modalType: "addToFolder",
    });
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <ModalContext.Provider value={isShowModal}>
      <RefactorModal />
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
          <S.AddInputButton onClick={handleAddToFolder} disabled={isEmpty}>
            추가하기
          </S.AddInputButton>
        </S.AddLinkBar>
      </S.AddLinkContainer>
    </ModalContext.Provider>
  );
}
