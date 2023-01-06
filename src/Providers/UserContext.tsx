import React, { useState } from "react";
import { createContext } from "react";
import { IformData, Iresponse, iUser, iUserContext } from "./@types";
import { iDefaultProvidersProps, iUserData } from "./@types";
import { useNavigate } from "react-router-dom";
import { Api } from "../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserContext = createContext({} as iUserContext);
export const UserProvider = ({ children }: iDefaultProvidersProps) => {
  const [loading, setLoading] = useState(false);
  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [userToken, setUserToken] = useState(
    localStorageToken ? localStorageToken : null
  );
  const [user, setUser] = useState<iUserData | null>(null);

  const navigate = useNavigate();
  const userRegister = () => {};

  const userLogout = () => {};
  const userEdit = () => {};
  const autoLogin = () => {};

  const userLogin = async (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  ) => {
    try {
      const request = await Api.post<Iresponse>("login", formData);
      setUser(request.data.user);
      localStorage.setItem("@SaudeParaTodos", request.data.accessToken);
      toast.success("Login realizado com sucesso");
      console.log(request.data);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        userToken,
        setUserToken,
        user,
        setUser,
        userRegister,
        userLogin,
        userLogout,
        userEdit,
        autoLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
