import React from "react";

export interface UserContextProp {
  loginData: {
    isLogin: boolean;
    userId: number | null;
  };
  handleUserDataState: (
    newState: Partial<UserContextProp["loginData"]>
  ) => void;
}

const InitialModalStateValue: UserContextProp = {
  loginData: {
    isLogin: false,
    userId: null,
  },
  handleUserDataState: () => {},
};

export const UserContext = React.createContext(InitialModalStateValue);
