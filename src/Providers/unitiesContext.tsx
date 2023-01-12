import { idata } from "../pages/RegisterUnits/@types";
import { TIMEOUT } from "dns";
import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import {
  iDefaultProvidersProps,
  IformData,
  iIdUnities,
  iUnity,
} from "./@types";
import { iUnitiesContext } from "./@types";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UnitiesContext = createContext({} as iUnitiesContext);

export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {
  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [allUnities, setAllUnities] = useState([] as iUnity[] | any);
  const [menuHeader, setMenuHeader] = useState(false);
  const [singleUnity, setSingleUnity] = useState({} as iUnity | null);
  const [modalInfoUnities, setModalInfoUnities] = useState(false);
  const [modalEditUnity, setModalEditUnity] = useState(false);
  const [idUnities, setIdUnities] = useState<iIdUnities | null>(null);
  const [unitie, setUnitie] = useState<iUnity | null>(null);
  const { userZipCodeCity } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [search, setSearch]: string | any = useState("");
  const [searchedUnities, setSearchedUnities] = useState<iUnity[]>([]);
  
  const newAllUnities = allUnities.filter((unity: any) => {
    const unityCep = String(unity.codigo_cep_estabelecimento).substring(0, 2);
    return search === ""
      ? unityCep === userZipCodeCity?.substring(0, 2)
      : unityCep === search.substring(0, 2);
  });

  const createUnity = async (formData: idata) => {
    try {
      const response = await Api.post(`unity`, formData, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
      setAllUnities([...allUnities, response.data])
      toast.success("Empresa Cadastrada com sucesso");
      console.log(response);

    } catch (error) {
      console.error(error);
    }
  };

  const editUnity = async (id: number, formData: iUnity) => {
  
    try {
      const response = await Api.patch(`unity/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
      
      const newUnity = allUnities.map((unity:iUnity) => {

        if(unity.id === id){
          setSingleUnity(response.data)
          return response.data
        }
        else{
          return unity
        }
      })

      setAllUnities(newUnity)
      setModalEditUnity(false)
      toast.success("Empresa Editada com sucesso");
      console.log(response);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteUnity = async (id: number) => {
  
    try {
      const response = await Api.delete(`unity/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
      let newUnities:iUnity = allUnities.filter((unity:iUnity)=> unity.id !== id)
      setAllUnities(newUnities)
      setModalInfoUnities(false)
      toast.success("Empresa Deletada com sucesso");
      console.log(response);

    } catch (error) {
      console.error(error);
    }
  };

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
        editUnity,
        deleteUnity,
        menuHeader,
        setMenuHeader,
        getALlUnities,
        singleUnity,
        setSingleUnity,
        idUnities,
        setIdUnities,
        modalInfoUnities,
        setModalInfoUnities,
        modalEditUnity,
        setModalEditUnity,
        ModalUnities,
        unitie,
        setUnitie,
        loading,
        setLoading,
        search,
        setSearch,
        searchedUnities,
        setSearchedUnities,

        newAllUnities,
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
