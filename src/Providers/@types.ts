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

export interface iListUpasData{ 
    nome_fantasia: string;
    codigo_cep_estabelecimento: number;
    endereco_estabelecimento: string;
    numero_estabelecimento: number;
    bairro_estabelecimento: string;
    numero_telefone_estabelecimento: number;
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
  nome_fantasia: string;
  codigo_cep_estabelecimento: number;
  endereco_estabelecimento: string;
  numero_estabelecimento: number;
  bairro_estabelecimento: string;
  numero_telefone_estabelecimento: number;
}

export interface iUnitiesContext {
  menuHeader: boolean;
  setMenuHeader: React.Dispatch<React.SetStateAction<boolean>>;
  allUnities: iUnity[] | null;
  setAllUnities: React.Dispatch<React.SetStateAction<iUnity[] | null>>
  singleUnity:iUnity | null
  setSingleUnity: React.Dispatch<React.SetStateAction<iUnity | null>>
  createUnity:() => void;
  deleteUnity:() => void;
  editUnity:() => void;

  getUnity:() => void;
  getALlUnities:() => void;


  


}
