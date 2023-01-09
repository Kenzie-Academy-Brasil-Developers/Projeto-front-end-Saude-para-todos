import React, { useEffect, useState } from "react";
import { Api } from "../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { IformData, Iresponse, iUser, iUserContext } from "./@types";
import { iRegisterFormValues } from "../pages/RegisterPage/interfaceRegister";
import { iDefaultProvidersProps, iUserData } from "./@types";

export const UserContext = createContext({} as iUserContext);
export const UserProvider = ({ children }: iDefaultProvidersProps) => {
  const [loading, setLoading] = useState(false);
  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [userToken, setUserToken] = useState(
    localStorageToken ? localStorageToken : null
  );
  const [user, setUser] = useState<iUserData | null>(null);

  const navigate = useNavigate();

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await Api.post<iUserData>("users", formData);
      console.log(response);
      toast.success(
        `${response.data.user.name.toUpperCase().trim()}, seja bem vindo(a)!`
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@SaudeParaTodos");
    setUserToken(null);
    setUser(null);
    navigate("/");
  };

  const userEdit = () => {};
  const autoLogin = () => {};

  const userLogin = async (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  ) => {
    try {
      const request = await Api.post("login", formData);
      setUser(request.data.user);
      localStorage.setItem("@id", request.data.user.id);
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

  useEffect(() => {
    const loadUser = async () => {
      if (!localStorageToken) {
        setLoading(false);
        return;
      }

      const userId = localStorage.getItem("@userId");

      try {
        const { data } = await Api.get(`users/${userId}`, {
          headers: {
            authorization: `Bearer ${localStorageToken}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

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
