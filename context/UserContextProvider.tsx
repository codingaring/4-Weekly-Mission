import { ReactNode, useState } from "react";
import { UserContext, UserContextProp } from "./UserContext";

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [loginData, setLoginData] = useState({
    isLogin: false,
    userId: 0,
  });

  function handleUserDataState(
    newState: Partial<UserContextProp["loginData"]>
  ) {
    setLoginData((prevState) => ({
      ...prevState,
      ...newState,
    }));
  }

  const userStateValue = {
    loginData,
    handleUserDataState,
  };

  return (
    <UserContext.Provider value={userStateValue}>
      {children}
    </UserContext.Provider>
  );
}
