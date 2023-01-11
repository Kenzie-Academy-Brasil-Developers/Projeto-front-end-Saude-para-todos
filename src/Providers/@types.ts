import React from "react";
import { iRegisterFormValues } from "../pages/RegisterPage/interfaceRegister";
export interface iDefaultProvidersProps {
  children: React.ReactNode;
}
export interface iUserData {
  accessToken: string;
  user: iUser;
}
export interface iUser {
  image: string;
  email: string;
  name: string;
  password: string;
  city: string;
  state: string;
  zipCode: string;
  age: number;
  id: number;
  isAdmin?: boolean;
}
export interface iUserContext {
  loading: boolean;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalPassword: boolean;
  setModalPassword: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  user: iUser | null;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;

  userLogin: (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  ) => void;

  userRegister: (
    formData: iRegisterFormValues,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;

  userLogout: () => void;
  userEdit: (formData: iRegisterFormValues, id: number | any) => void;
  userPassword: (formData: iRegisterFormValues, id: number | any) => void;
  autoLogin: () => void;
}

export interface IformData {
  email: string;
  password: string | number;
}

 export interface Iresponse {
  accessToken: string;
  user: iUser;
} 

export interface iUnitiesContext {
  menuHeader: boolean;
  setMenuHeader: React.Dispatch<React.SetStateAction<boolean>>;
  allUnities: boolean;
  setAllUnities: React.Dispatch<React.SetStateAction<boolean>>;
  createUnity: () => void;
  deleteUnity: () => void;
  editUnity: () => void;
  getUnities: () => void;
}
