import { createContext, useContext, useState } from "react";
import { idata } from "../pages/RegisterUnits/@types";
import { Api } from "../services/Api";
import { iDefaultProvidersProps } from "./@types";
import { iUnitiesContext } from "./@types";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UnitiesContext = createContext({} as iUnitiesContext);
export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {
  const [allUnities, setAllUnities] = useState(false);

  const [menuHeader, setMenuHeader] = useState(false);
  const { localStorageToken } = useContext(UserContext);

  const createUnity = async (formData: idata) => {
    try {
      const response = await Api.post(`unity`, formData, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });

      toast.success("Empresa Cadastrada com sucesso");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUnity = async (id: number | string) => {
    try {
      await Api.delete(`unity/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const editUnity = () => {};
  const getUnities = () => {};

  return (
    <UnitiesContext.Provider
      value={{
        allUnities,
        setAllUnities,
        createUnity,
        deleteUnity,
        editUnity,
        getUnities,
        menuHeader,
        setMenuHeader,
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
