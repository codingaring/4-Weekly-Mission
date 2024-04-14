import Footer from "../Footer";
import { PropsWithChildren, useEffect } from "react";
import { NavigationBar } from "../NavigationBar";
import { useRouter } from "next/router";

export const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const localStorageToken = localStorage.getItem("accessToken");
    if (currentPath !== "/") {
      if (localStorageToken === null) {
        router.push("/signin");
      }
    }
  }, [currentPath, router]);

  return (
    <>
      <div>
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </div>
      <div id="portal"></div>
    </>
  );
};
