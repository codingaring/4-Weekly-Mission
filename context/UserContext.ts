import React from "react";

export interface UserContextProp {
  isLogin: boolean;
  handleUserDataState: () => void;
}

const InitialModalStateValue: UserContextProp = {
  isLogin: false,
  handleUserDataState: () => {},
};

export const UserContext = React.createContext(InitialModalStateValue);
