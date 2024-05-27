import { ReactNode, useState } from "react";
import { UserContext, UserContextProp } from "./UserContext";

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [loginData, setLoginData] = useState<UserContextProp["loginData"]>({
    isLogin: false,
    userId: null,
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
