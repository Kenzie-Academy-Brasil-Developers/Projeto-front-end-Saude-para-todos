import React, { useState } from "react";
import { Api } from "../services/Api"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import { createContext } from "react";
import { iRegisterFormValues } from "../pages/RegisterPage/interfaceRegister";
import { iUserContext } from "./@types";
import { iDefaultProvidersProps, iUserData } from "./@types";

export const UserContext = createContext({} as iUserContext);
export const UserProvider = ({ children }: iDefaultProvidersProps) => {
  const [loading, setLoading] = useState(false);
  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [userToken, setUserToken] = useState(localStorageToken ? localStorageToken : null);
  const [user, setUser] = useState<iUserData | null>(null);
  const navigate = useNavigate();

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      setLoading(true)
      const response = await Api.post<iUserData>("users", formData)
      console.log(response)
      toast.success(`${response.data.user.name.toUpperCase().trim()}, seja bem vindo(a)!`)
      navigate("/")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const userLogin = () => {};
  const userLogout = () => {};
  const userEdit = () => {};
  const autoLogin = () => {};
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
