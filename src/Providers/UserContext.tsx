import React, { useState, useEffect } from "react";
import { Api } from "../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext } from "react";
import { IformData, iUser, iUserContext, iZipCodeCity } from "./@types";
import { iRegisterFormValues } from "../pages/RegisterPage/interfaceRegister";
import { iDefaultProvidersProps, iUserData } from "./@types";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as iUserContext);
export const UserProvider = ({ children }: iDefaultProvidersProps) => {
  const [loading, setLoading] = useState(false);

  const [userZipCodeCity, setUserZipCodeCity] = useState<string | null >(
    ""
  );

  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);
  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [userToken, setUserToken] = useState(
    localStorageToken ? localStorageToken : null
  );
  const [user, setUser] = useState<iUser | null>(null);
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
    localStorage.clear();
    setUserToken(null);
    setUser(null);
    navigate("/");
  };

  const userEdit = async (formData: iRegisterFormValues, id: number) => {
    console.log(id);
    try {
      Api.defaults.headers.common.authorization = `Bearer ${localStorageToken}`;
      const response = await Api.patch(`users/${id}`, formData, {});
      toast.success("Editado com sucesso");
      setUser(response.data);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      setOpenModal(false);
      setEditModal(false);
      setModalPassword(false);
      console.log(response.data);
    } catch (error) {}
  };

  const userPassword = async (formData: iRegisterFormValues, id: number) => {
    console.log(id);
    try {
      Api.defaults.headers.common.authorization = `Bearer ${localStorageToken}`;
      const response = await Api.patch(`users/${id}`, formData, {});
      toast.success("Editado com sucesso");
      setUser(response.data);
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      setOpenModal(false);
      setEditModal(false);
      setModalPassword(false);
      console.log(response.data);
    } catch (error) {}
  };

  const autoLogin = () => {};

  const userLogin = async (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  ) => {
    try {
      const request = await Api.post("login", formData);
      setUser(request.data.user);
      localStorage.setItem("@userId", request.data.user.id);
      localStorage.setItem("@SaudeParaTodos", request.data.accessToken);
      setUserZipCodeCity(request.data.user.zipCode);
      toast.success("Login realizado com sucesso");
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (error: any) {
      toast.error(error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      if (!localStorageToken) {
        setLoading(false);
        return;
      }

      const userId = localStorage.getItem("@userId");

      try {
        const request = await Api.get(`users/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorageToken}`,
            "Content-Type": "application/json",
          },
        });

        setUser(request.data);
        setUserZipCodeCity(request.data.zipCode);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [localStorageToken]);

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
        userPassword,
        openModal,
        setOpenModal,
        modalPassword,
        setModalPassword,
        editModal,
        setEditModal,
        autoLogin,
        userZipCodeCity,
        setUserZipCodeCity,
        localStorageToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
/* const editTechList = tech.map(t => {
        if(t.id === id){
          return {...t, status: formData}
        } else {
          return t
        }
      }); 
      setTech(editTechList) */
