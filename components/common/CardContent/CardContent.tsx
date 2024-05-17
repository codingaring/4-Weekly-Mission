import { KebabMenu } from "@components/folder/KebabMenu/KebabMenu";
import * as S from "./CardContentStyled";
import Image from "next/image";
import { usePortalContents } from "@hooks/usePortalContents";
import { FolderListDataForm } from "@data-access/getCategory";

interface CardContentProps {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
  currentLocation: string;
  selectURL: string;
  folderList: FolderListDataForm[];
  linkId: number;
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  currentLocation,
  selectURL,
  folderList,
  linkId,
}: CardContentProps) => {
  const kebabMenu = usePortalContents();

  return (
    <S.CardContentContainer isHovered={isHovered}>
      <>
        <S.ElapsedTime>{elapsedTime}</S.ElapsedTime>
        {!currentLocation.includes("shared") && (
          <S.KebabButton type="button" onClick={kebabMenu.toggleContents}>
            <Image fill src="/images/kebab.svg" alt="메뉴 보기" />
          </S.KebabButton>
        )}
        {kebabMenu.isOpenModal && (
          <KebabMenu
            folderList={folderList}
            selectURL={selectURL}
            linkId={linkId}
          />
        )}
      </>

      <S.Description>{description}</S.Description>
      <S.CreatedAtText>{createdAt}</S.CreatedAtText>
    </S.CardContentContainer>
  );
};
