import { RecoilRoot } from "recoil";
import "../setting-files/global.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "context/UserContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </UserContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
