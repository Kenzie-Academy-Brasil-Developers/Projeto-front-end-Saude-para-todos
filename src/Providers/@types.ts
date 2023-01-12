import React from "react";
import { iRegisterFormValues } from "../pages/RegisterPage/interfaceRegister";
import { idata } from "../pages/RegisterUnits/@types";
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
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  userEdit: (formData: iRegisterFormValues, id: number | any) => void;
  userPassword: (formData: iRegisterFormValues, id: number | any) => void;
  autoLogin: () => void;

  userZipCodeCity: string | null;
  setUserZipCodeCity: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IformData {
  email: string;
  password: string | number;
}

export interface Iresponse {
  accessToken: string;
  user: iUser;
}

export interface iUnity {
  id: number;
  nome_fantasia: string;
  codigo_cep_estabelecimento: number;
  endereco_estabelecimento: string;
  numero_estabelecimento: number;
  bairro_estabelecimento: string;
  numero_telefone_estabelecimento: number;
}
export interface iZipCodeCity {
  zipCode: string | number;
}
export interface iIdUnities {
  id: number;
}
export interface iUnitiesContext {
  menuHeader: boolean;
  setMenuHeader: React.Dispatch<React.SetStateAction<boolean>>;

  allUnities: iUnity[] | [] | any;
  setAllUnities: React.Dispatch<React.SetStateAction<iUnity[] | null>>;
  singleUnity: iUnity | null;
  setSingleUnity: React.Dispatch<React.SetStateAction<iUnity | null>>;

  getALlUnities: () => void;
  idUnities: number | null | any;
  setIdUnities: React.Dispatch<any>;
  modalInfoUnities: boolean;
  setModalInfoUnities: React.Dispatch<React.SetStateAction<boolean>>;
  ModalUnities: (id: number) => iUnity | any;
  unitie: iUnity | null;
  setUnitie: React.Dispatch<React.SetStateAction<iUnity | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  search: string | any;
  setSearch: any;
  searchedUnities: iUnity[] | [];
  setSearchedUnities: React.Dispatch<React.SetStateAction<iUnity[] | []>>;
  newAllUnities: iUnity[];
  createUnity: (formData: idata) => void;
  deleteUnity: (id: number) => void;
}
