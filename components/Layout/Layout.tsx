import { useGetUser as getUser } from "../../data-access/useGetUser";
<<<<<<< Updated upstream
import Footer from "../Footer";
=======
import { Footer } from "../Footer";
>>>>>>> Stashed changes
import { useEffect, useState } from "react";
import { NavigationBar } from "../NavigationBar";
import { DEFAULT_PROFILE_IMAGE } from "../NavigationBar/constant";
import type { ChildrenProp } from "../../types/ChildrenProp";

export const Layout = ({ children }: ChildrenProp) => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    imageSource: DEFAULT_PROFILE_IMAGE,
  });

  const handleLoadUser = async () => {
    const { data } = await getUser();
    const { email, image_source } = data[0] || {};
    setUserInfo({
      email,
      imageSource: image_source,
    });
  };

  useEffect(() => {
    handleLoadUser();
  }, []);

  return (
    <>
      <div>
        <NavigationBar userInfo={userInfo} />
        <main>{children}</main>
        <Footer />
      </div>
      <div id="portal"></div>
    </>
  );
};
