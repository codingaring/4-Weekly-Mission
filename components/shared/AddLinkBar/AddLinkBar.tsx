import * as S from "./AddLinkBarStyled";
import { ADD_ICON } from "./constant";
import { FolderListDataForm } from "@data-access/getCategory"; 
import { usePortalContents } from "@hooks/usePortalContents";
import { AddToFolder } from "@components/common/Modals/AddToFolder";
import { useInputValue } from "@hooks/useInputValue";

export function AddLinkBar({
  folderInfo,
  isFloating = false,
}: {
  folderInfo: FolderListDataForm[] | undefined;
  isFloating?: boolean;
}) {
  const { insertValue, onChange, handleReset } = useInputValue();
  const { isOpenModal, toggleContents } = usePortalContents();

  return (
    <>
      {isOpenModal && (
        <AddToFolder
          handleReset={handleReset}
          linkURL={insertValue}
          folderList={folderInfo}
          handleCloseModal={toggleContents}
        />
      )}
      <S.AddLinkContainer isFloating={isFloating}>
        <S.AddLinkBar isEmpty={insertValue ? false : true}>
          <S.AddLinkInputContainer>
            <S.AddLinkIcon src={ADD_ICON} alt="링크 추가하기 아이콘" />
            <S.AddLinkInput
              type="text"
              placeholder="링크를 추가해 보세요"
              onChange={onChange}
            />
          </S.AddLinkInputContainer>
          <S.AddInputButton
            onClick={toggleContents}
            disabled={insertValue ? false : true}
          >
            추가하기
          </S.AddInputButton>
        </S.AddLinkBar>
      </S.AddLinkContainer>
    </>
  );
}
