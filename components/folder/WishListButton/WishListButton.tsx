import { useState } from "react";
import { EMPTY_STAR, FULL_STAR } from "./constant";
import * as S from "./WishListButtonStyled";
import { MouseEvent } from "react";
import Image from "next/image";
import { useMutation } from "@tanstack/react-query";
import { putBookmark } from "@data-access/putBookmark";

interface WishListButtonProp {
  wishListBtn: string;
  isFavorite: boolean;
}

export default function WishListButton({
  linkId,
  isFavorite,
  folderId,
}: {
  linkId: number;
  isFavorite: boolean;
  folderId: number;
}) {
  const [wishListState, setWishListState] = useState<WishListButtonProp>({
    wishListBtn: EMPTY_STAR,
    isFavorite: false,
  });
  const wishListMutation = useMutation({
    mutationFn: async ({
      linkId,
      isFavorite,
    }: {
      linkId: number;
      isFavorite: boolean;
    }) => {
      await putBookmark({ linkId, isFavorite });
    },
  });

  const handleWishListBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setWishListState((prevState) => ({
      wishListBtn: prevState.isFavorite ? FULL_STAR : EMPTY_STAR,
      isFavorite: !prevState.isFavorite,
    }));
    wishListMutation.mutate({ linkId, isFavorite: wishListState.isFavorite });
  };

  return (
    <S.WishListButtonContainer onClick={handleWishListBtn} id={linkId}>
      <Image
        fill
        src={wishListState.wishListBtn}
        alt="즐겨찾기로 추가하기 버튼"
      />
    </S.WishListButtonContainer>
  );
}
