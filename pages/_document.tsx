import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="ko">
      <Head></Head>
      <body>
        <Main />
<<<<<<< Updated upstream
        <div id="modal"></div>
=======
        <div id="portal"></div>
>>>>>>> Stashed changes
        <NextScript />
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.min.js" />
      </body>
    </Html>
  );
}
