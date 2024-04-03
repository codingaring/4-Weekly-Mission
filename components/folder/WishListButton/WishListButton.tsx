import { useState } from "react";
import { EMPTY_STAR, FULL_STAR } from "./constant";
import * as S from "./WishListButtonStyled";
import { MouseEvent } from "react";
import Image from "next/image";

export default function WishListButton() {
  const [wishListBtn, setWishListBtn] = useState(EMPTY_STAR);

  const handleWishListBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    wishListBtn === EMPTY_STAR
      ? setWishListBtn(FULL_STAR)
      : setWishListBtn(EMPTY_STAR);
  };

  return (
    <S.WishListButtonContainer onClick={handleWishListBtn}>
      <Image fill src={wishListBtn} alt="즐겨찾기로 추가하기 버튼" />
    </S.WishListButtonContainer>
  );
}
