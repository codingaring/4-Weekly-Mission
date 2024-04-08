import { KebabMenu } from "@components/folder/KebabMenu/KebabMenu";
import * as S from "./CardContentStyled";
import { MouseEvent, useState } from "react";
import { FolderListDataForm } from "../../../types/DataForm";
import Image from "next/image";

interface CardContentProps {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
  currentLocation: string;
  selectURL: string;
  data: FolderListDataForm[];
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  currentLocation,
  selectURL,
  data,
}: CardContentProps) => {
  const [isOpened, setIsClick] = useState(false);
  const className = isHovered
    ? "CardContent CardContent-hovered"
    : "CardContent";

  const handleClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClick(isOpened === false ? true : false);
  };

  return (
    <S.CardContentContainer isHovered={isHovered}>
      <div className="CardContent-time-kebab">
        <S.ElapsedTime>{elapsedTime}</S.ElapsedTime>
        {currentLocation === "/folder" && (
          <S.KebabButton type="button" onClick={handleClickMenu}>
            <Image fill src="/images/kebab.svg" alt="메뉴 보기" />
          </S.KebabButton>
        )}
        {isOpened && <KebabMenu selectURL={selectURL} data={data} />}
      </div>

      <S.Description>{description}</S.Description>
      <S.CreatedAtText>{createdAt}</S.CreatedAtText>
    </S.CardContentContainer>
  );
};
