import * as S from "./SharedFolderStyled";
import { DeleteFolderProps } from "../ModalProp";
import { handleCopyClipBoard } from "@util/copyClipBoard";
import Link from "next/link";
import { shareKakao } from "@util/sharedKakao";
import Modal from "../Modal";

declare global {
  interface Window {
    Kakao: any;
  }
}

export function SharedFolder({
  selectFolder,
  handleCloseModal,
}: DeleteFolderProps) {
  const handleSharedKakao = () => {
    shareKakao("https://codingaring-week11-linkbrary.netlify.app");
  };

  https: return (
    <Modal title={"폴더 공유"} handleCloseModal={handleCloseModal}>
      <S.FolderName>{selectFolder}</S.FolderName>
      <S.ButtonContainer>
        <S.SharedButton onClick={handleSharedKakao}>
          <S.KakaoTalkIcon />
          <S.IconText>카카오톡</S.IconText>
        </S.SharedButton>
        <Link
          target="_blank"
          href={
            "http://www.facebook.com/sharer/sharer.php?u=" +
            "https://codingaring-week11-linkbrary.netlify.app/folder"
          }
          rel="noreferrer"
        >
          <S.SharedButton>
            <S.FacebookIcon />
            <S.IconText>페이스북</S.IconText>
          </S.SharedButton>
        </Link>
        <S.SharedButton
          onClick={() => {
            handleCopyClipBoard(`http://localhost:3000/shared/`);
          }}
        >
          <S.CopyIcon />
          <S.IconText>링크 복사</S.IconText>
        </S.SharedButton>
      </S.ButtonContainer>
    </Modal>
  );
}
