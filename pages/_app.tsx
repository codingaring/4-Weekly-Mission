import { RecoilRoot } from "recoil";
import "../setting-files/global.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "context/UserContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </UserContextProvider>
  );
}
