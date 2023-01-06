import React from "react";
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
  user: iUserData | null;
  setUser: React.Dispatch<React.SetStateAction<iUserData | null>>;
  userRegister: () => void;
  userLogin: () => void;
  userLogout: () => void;
  userEdit: () => void;
  autoLogin: () => void;
}