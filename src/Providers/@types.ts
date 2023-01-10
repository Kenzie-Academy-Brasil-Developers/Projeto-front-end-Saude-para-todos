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
  email: string;
  name: string;
  age: number;
  id: number;
  isAdmin?: boolean;
}
export interface iUserContext {
  loading: boolean;
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

  localStorageToken: string | any;

  userLogout: () => void;
  userEdit: () => void;
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
  createUnity: (formData: IformData) => void;
  deleteUnity: (id: number | string) => void;
  editUnity: () => void;
  getUnities: () => void;
}
