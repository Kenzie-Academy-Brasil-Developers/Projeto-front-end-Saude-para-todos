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
  user: iUserData | null;

  setUser: React.Dispatch<React.SetStateAction<iUser | null | any>>;
  userLogin: (
    formData: IformData,
    setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  ) => void;


  userRegister: (formData: iRegisterFormValues, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void

  
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
  menuHeader:boolean;
  setMenuHeader: React.Dispatch<React.SetStateAction<boolean>>;
  allUnities:boolean;
  setAllUnities: React.Dispatch<React.SetStateAction<boolean>>;
  createUnity:() => void;
  deleteUnity:() => void;
  editUnity:() => void;
  getUnities:() => void;
  listUpas: iListUpasData | [] |any;
  setListUpas:React.Dispatch<React.SetStateAction<iListUpasData[]>>

}

