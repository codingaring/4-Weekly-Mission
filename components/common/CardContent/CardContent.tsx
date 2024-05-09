import { KebabMenu } from "@components/folder/KebabMenu/KebabMenu";
import * as S from "./CardContentStyled";
import { MouseEvent, useState } from "react";
import Image from "next/image";

interface CardContentProps {
  elapsedTime: string;
  description: string;
  createdAt: string;
  isHovered: boolean;
  currentLocation: string;
  selectURL: string;
}

export const CardContent = ({
  elapsedTime,
  description,
  createdAt,
  isHovered,
  currentLocation,
  selectURL,
}: CardContentProps) => {
  const [isOpened, setIsClick] = useState(false);

  const handleClickMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClick(isOpened === false ? true : false);
  };

  return (
    <S.CardContentContainer isHovered={isHovered}>
      <>
        <S.ElapsedTime>{elapsedTime}</S.ElapsedTime>
        {!currentLocation.includes("shared") && (
          <S.KebabButton type="button" onClick={handleClickMenu}>
            <Image fill src="/images/kebab.svg" alt="메뉴 보기" />
          </S.KebabButton>
        )}
        {isOpened && <KebabMenu selectURL={selectURL} />}
      </>

      <S.Description>{description}</S.Description>
      <S.CreatedAtText>{createdAt}</S.CreatedAtText>
    </S.CardContentContainer>
  );
};
