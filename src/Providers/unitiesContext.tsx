import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { iDefaultProvidersProps, iUnity } from "./@types";
import { iUnitiesContext } from "./@types";

export const UnitiesContext = createContext({} as iUnitiesContext);
export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {
  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [allUnities, setAllUnities] = useState([] as iUnity[] | null);
  const [menuHeader, setMenuHeader] = useState(false);
  const [singleUnity, setSingleUnity] = useState({} as iUnity | null)

  const createUnity = () => {};
  const deleteUnity = () => {};
  const editUnity = () => {};

  const getUnity = async () => {
    try {
      // unityId = response.data.id
      const response = await Api.get(`unity/${1}`,{
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response)
      setSingleUnity(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getALlUnities = () => {};

  return (
    <UnitiesContext.Provider
      value={{
        allUnities,
        setAllUnities,
        createUnity,
        deleteUnity,
        editUnity,
        getUnity,
        menuHeader,
        setMenuHeader,
        getALlUnities,
        singleUnity,
        setSingleUnity
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
