declare global {
  interface Window {
    Kakao: any;
  }
}

export function shareKakao(route: string) {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "설명",
        imageUrl: "/images/ogImage.png",
        link: {
          mobileWebUrl: "https://codingaring-week11-linkbrary.netlify.app",
          webUrl: "https://codingaring-week11-linkbrary.netlify.app",
        },
      },
      buttons: [
        {
          title: "Linkbrary",
          link: {
            mobileWebUrl: "https://codingaring-week11-linkbrary.netlify.app",
          },
        },
      ],
    });
  }
}
