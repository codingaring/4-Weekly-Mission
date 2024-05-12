import Footer from "../Footer";
import { PropsWithChildren } from "react";
import { NavigationBar } from "../NavigationBar";

export const Layout = ({ children }: PropsWithChildren) => {
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
