import { forwardRef } from "react";
import * as S from "./FolderHeaderStyled";
import { NavigationBar } from "@components/common/NavigationBar";
import { AddLinkBar } from "@components/shared/AddLinkBar/AddLinkBar";
import { FolderListDataForm } from "@data-access/axios/getCategory";

const FolderHeader = forwardRef(
  (
    {
      folderInfo,
      isFloating,
    }: { folderInfo: FolderListDataForm[]; isFloating: boolean },
    ref
  ) => {
    return (
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        <S.FolderHeaderContainer>
          <NavigationBar />
          <AddLinkBar folderInfo={folderInfo} isFloating={isFloating} />
        </S.FolderHeaderContainer>
      </div>
    );
  }
);

FolderHeader.displayName = "FolderHeader";

export default FolderHeader;
