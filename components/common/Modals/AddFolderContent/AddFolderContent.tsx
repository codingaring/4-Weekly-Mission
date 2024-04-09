import { ModalInput } from "../ModalElements/ModalInput";
import { ModalButtonBlue } from "../ModalElements/ModalButtonBlue";

export function AddFolderContent() {
  return (
    <>
      <ModalInput placeholder="내용 입력" type="text"></ModalInput>
      <ModalButtonBlue type="button">추가하기</ModalButtonBlue>
    </>
  );
}
