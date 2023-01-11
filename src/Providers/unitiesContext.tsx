import { TIMEOUT } from "dns";
import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { iDefaultProvidersProps, iIdUnities, iUnity } from "./@types";
import { iUnitiesContext } from "./@types";
import { UserContext } from "./UserContext";

export const UnitiesContext = createContext({} as iUnitiesContext);

export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {

  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [allUnities, setAllUnities] = useState([] as iUnity[]);
  const [menuHeader, setMenuHeader] = useState(false);
  const [singleUnity, setSingleUnity] = useState({} as iUnity | null);
  const [modalInfoUnities, setModalInfoUnities] = useState(false);
  const [idUnities, setIdUnities] = useState<iIdUnities | null>(null);
  const [unitie, setUnitie] = useState<iUnity | null>(null);
  const { userZipCodeCity} = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [search, setSearch]: string | any = useState("");
<<<<<<< HEAD
  const [searchedUnities, setSearchedUnities] = useState<iUnity[] >([]);
  const newAllUnities = allUnities.filter((unity) => {
    const unityCep = String( unity.codigo_cep_estabelecimento).substring(0,2)
    return(
    search === "" ?  unityCep === userZipCodeCity.substring(0,2) : unityCep === search.substring(0,2)
    ) 
  })
  const createUnity = () => {};
  const deleteUnity = () => {};
=======
  const [searchedUnities, setSearchedUnities] = useState<iUnity[] | [] | any>([]);



  const createUnity = async (formData: IformData) => {
    try {
      await Api.post(`unity`, formData, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
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

>>>>>>> b7b33c92b9f23c54b2f7f40c4f9ae48a751581ef
  const editUnity = () => {};
  
  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await Api.get("unity");

        setAllUnities(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const ModalUnities = async (id: number) => {
    const token = localStorage.getItem("@SaudeParaTodos");
    try {
      const response = await Api.get(`unity/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSingleUnity(response.data);
      return response.data;
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
        menuHeader,
        setMenuHeader,
        getALlUnities,
        singleUnity,
        setSingleUnity,
        idUnities,
        setIdUnities,
        modalInfoUnities,
        setModalInfoUnities,
        ModalUnities,
        unitie,
        setUnitie,
        loading,
        setLoading,
        search,
        setSearch,
        searchedUnities,
        setSearchedUnities,

        newAllUnities
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
