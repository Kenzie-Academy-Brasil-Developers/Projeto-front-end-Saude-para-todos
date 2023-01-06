import { useState } from "react";
import { createContext } from "react";
import { iUserContext } from "./@types";
import { iDefaultProvidersProps } from "./@types";

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iDefaultProvidersProps) => {
  const [loading, setLoading] = useState(false);
  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [userToken, setUserToken] = useState(
    localStorageToken ? localStorageToken : null
  );

  const userRegister = () => {};

  const userLogin = () => {};

  const userLogout = () => {};

  const userEdit = () => {};

  const autoLogin = () => {};

  return (
    <UserContext.Provider
      value={{
        userRegister,
        userLogin,
        userLogout,
        userEdit,
        autoLogin,
        loading,
        setLoading,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
