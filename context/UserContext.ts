import React from "react";

export interface UserContextProp {
  loginData: {
    isLogin: boolean;
    userId: number;
  };
  handleUserDataState: (
    newState: Partial<UserContextProp["loginData"]>
  ) => void;
}

const InitialModalStateValue: UserContextProp = {
  loginData: {
    isLogin: false,
    userId: 0,
  },
  handleUserDataState: () => {},
};

export const UserContext = React.createContext(InitialModalStateValue);
