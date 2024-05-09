import { MouseEvent, useState } from "react";

export function usePortalContents() {
  const [isOpenContents, setIsOpenContents] = useState(false);

  function toggleContents(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsOpenContents(!isOpenContents);
  }

  return { isOpenModal: isOpenContents, toggleContents };
}
