import * as S from "./SharedFolderStyled";
import { useEffect } from "react";
import { DeleteFolderProps } from "../ModalProp";
import Modal from "../Modal";
import { handleCopyClipBoard } from "@util/copyClipBoard";

declare global {
  interface Window {
    Kakao: any;
  }
}

export function SharedFolder({ selectFolder }: DeleteFolderProps) {
  const { Kakao } = window;
  useEffect(() => {
    Kakao.cleanup();
    console.log("key:", process.env.REACT_APP_KAKAO_KEY);
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
    console.log("check!!:", Kakao.isInitialized());
  }, [Kakao]);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
        imageUrl: "https://codingaring-week11-linkbrary.netlify.app",
        link: {
          mobileWebUrl:
            "https://codingaring-week11-linkbrary.netlify.app/folder",
        },
      },
      buttons: [
        {
          title: "Linkbrary",
          link: {
            mobileWebUrl:
              "https://codingaring-week11-linkbrary.netlify.app/folder",
          },
        },
      ],
    });
  };

  https: return (
    <>
      <S.FolderName>{selectFolder}</S.FolderName>
      <S.ButtonContainer>
        <S.SharedButton onClick={shareKakao}>
          <S.KakaoTalkIcon />
          <S.IconText>카카오톡</S.IconText>
        </S.SharedButton>
        <a
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
        </a>
        <S.SharedButton
          onClick={() => {
            handleCopyClipBoard(
              "https://codingaring-week11-linkbrary.netlify.app/folder"
            );
          }}
        >
          <S.CopyIcon />
          <S.IconText>링크 복사</S.IconText>
        </S.SharedButton>
      </S.ButtonContainer>
    </>
  );
}
