import { createContext, useState } from "react";
import { UserInfo } from "../../types/apiTypes";

interface Props {
  children: JSX.Element;
}

interface UserContext {
  userInfo: UserInfo;
  handleUserContextChange: (userInfo: UserInfo) => void;
}

export const UserContext = createContext<UserContext>({
  userInfo: { name: "" },
  handleUserContextChange: () => {},
});

export default function UserContextProvider({ children }: Props) {
  function handleUserContextChange(userInfos: UserInfo) {
    setUserInfo({ ...userInfos });
  }

  const [userInfo, setUserInfo] = useState({ name: "" });
  return (
    <UserContext.Provider value={{ userInfo, handleUserContextChange }}>
      {children}
    </UserContext.Provider>
  );
}
