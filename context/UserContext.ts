import React from "react";

export interface UserContextProp {
  loginData: {
    isLogin: boolean;
    userId: string;
  };
  handleUserDataState: (
    newState: Partial<UserContextProp["loginData"]>
  ) => void;
}

const InitialModalStateValue: UserContextProp = {
  loginData: {
    isLogin: false,
    userId: "",
  },
  handleUserDataState: () => {},
};

export const UserContext = React.createContext(InitialModalStateValue);
