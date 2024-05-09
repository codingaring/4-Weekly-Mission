import { useState } from "react";

export function useModal() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function toggleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return { isOpenModal, toggleModal };
}
