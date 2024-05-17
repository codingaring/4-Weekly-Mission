import { MouseEvent, useState } from "react";

export function usePortalContents() {
  const [isOpenContents, setIsOpenContents] = useState(false);

  function toggleContents(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    setIsOpenContents((prevIsOpenContents) => !isOpenContents);
  }

  return { isOpenModal: isOpenContents, toggleContents };
}
