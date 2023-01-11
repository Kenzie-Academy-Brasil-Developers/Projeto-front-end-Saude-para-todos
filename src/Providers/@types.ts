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

  userLogout: () => void;
  userEdit: () => void;
  autoLogin: () => void;

  userZipCodeCity: string 
  setUserZipCodeCity: React.Dispatch<any>
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
  id:string;
  nome_fantasia: string;
  codigo_cep_estabelecimento: number;
  endereco_estabelecimento: string;
  numero_estabelecimento: number;
  bairro_estabelecimento: string;
  numero_telefone_estabelecimento: number;
}
export interface iZipCodeCity {
  zipCode: string| number;
}
export interface iIdUnities{
  id: number;
 }
export interface iUnitiesContext {
  menuHeader: boolean;
  setMenuHeader: React.Dispatch<React.SetStateAction<boolean>>;
  allUnities: iUnity[];
  setAllUnities: React.Dispatch<React.SetStateAction<iUnity[]>>
  singleUnity:iUnity | null
  setSingleUnity: React.Dispatch<React.SetStateAction<iUnity | null>>
  createUnity:() => void;
  deleteUnity:() => void;
  editUnity:() => void;
  getALlUnities:() => void;
  idUnities: number | null |any;
  setIdUnities: React.Dispatch<any>
  modalInfoUnities: boolean;
  setModalInfoUnities: React.Dispatch<React.SetStateAction<boolean>>
  ModalUnities: (id: number) => iUnity| any;
  unitie: iUnity | null;
  setUnitie: React.Dispatch<React.SetStateAction<iUnity | null>>
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  search: string | any;
  setSearch:  any
  searchedUnities: iUnity[] | [];
  setSearchedUnities: React.Dispatch<React.SetStateAction<iUnity[] | []>>
  newAllUnities: iUnity[];
}

