import React from "react";

export interface iDefaultProvidersProps {
  children: React.ReactNode;
}

export interface iUserContext {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  userRegister: () => void;
  userLogin: () => void;
  userLogout: () => void;
  userEdit: () => void;
  autoLogin: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
