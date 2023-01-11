import React, { useState, useEffect } from "react";
import { Api } from "../services/Api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { IformData, iUser, iUserContext } from "./@types";
import { iRegisterFormValues } from "../pages/RegisterPage/interfaceRegister";
import { iDefaultProvidersProps, iUserData } from "./@types";

export const UserContext = createContext({} as iUserContext);
export const UserProvider = ({ children }: iDefaultProvidersProps) => {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [editModal, setEditModal]= useState(false);
  const [modalPassword, setModalPassword]= useState(false);
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
    localStorage.removeItem("@SaudeParaTodos");
    setUserToken(null);
    setUser(null);
    navigate("/");
  };
 
 const userEdit = async (formData: iRegisterFormValues, id:number) => {
    
    console.log(id)
    try {
      Api.defaults.headers.common.authorization = `Bearer ${localStorageToken}`;
      const response = await Api.patch(`users/${id}`,formData,{
        
      });
      toast.success("Editado com sucesso")
      setUser(response.data)
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      setOpenModal(false)
      setEditModal(false)
      setModalPassword(false) 
      console.log(response.data)
    } catch (error) {
      
    }
  }; 

  const userPassword = async (formData: iRegisterFormValues, id:number) => {
    
    console.log(id)
    try {
      Api.defaults.headers.common.authorization = `Bearer ${localStorageToken}`;
      const response = await Api.patch(`users/${id}`,formData,{
        
      });
      toast.success("Editado com sucesso")
      setUser(response.data)
      setTimeout(() => {
        navigate("/home");
      }, 3000);
      setOpenModal(false)
      setEditModal(false)
      setModalPassword(false) 
      console.log(response.data)
    } catch (error) {
      
    }
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
        userPassword,
        openModal,
        setOpenModal,
        modalPassword, 
        setModalPassword,
        editModal, 
        setEditModal,
        autoLogin,
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