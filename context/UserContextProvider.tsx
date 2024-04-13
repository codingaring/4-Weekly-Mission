import { ReactNode, useState } from "react";
import { UserContext, UserContextProp } from "./UserContext";

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [isLogin, setIsLogin] = useState(false);

  function handleUserDataState() {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }

  const userStateValue = {
    isLogin,
    handleUserDataState,
  };

  return (
    <UserContext.Provider value={userStateValue}>
      {children}
    </UserContext.Provider>
  );
}
