
import { idata } from "../pages/RegisterUnits/@types";
import { TIMEOUT } from "dns";
import { createContext, useContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { iDefaultProvidersProps, IformData, iIdUnities, iUnity } from "./@types";
import { iUnitiesContext } from "./@types";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UnitiesContext = createContext({} as iUnitiesContext);

export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {

  const localStorageToken = localStorage.getItem("@SaudeParaTodos");
  const [allUnities, setAllUnities] = useState([] as iUnity[] | null | any);
  const [menuHeader, setMenuHeader] = useState(false);
  const [singleUnity, setSingleUnity] = useState({} as iUnity | null);
  const [modalInfoUnities, setModalInfoUnities] = useState(false);
  const [idUnities, setIdUnities] = useState<iIdUnities | null>(null);
  const [unitie, setUnitie] = useState<iUnity | null>(null);
  const { userZipCodeCity, setUserZipCodeCity } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [search, setSearch]: string | any = useState("");
  const [searchedUnities, setSearchedUnities] = useState<iUnity[] | [] | any>([]);



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
  
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await Api.get("unity");
        console.log(userZipCodeCity);
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

  const searchUnities = (event: any) => {
    event.preventDefault();
    console.log(search);
    const searching = allUnities.filter((unities: iUnity[] | null | any) => {
      return (
        unities.nome_fantasia.toLowerCase().includes(search.toLowerCase()) ||
        unities.codigo_cep_estabelecimento
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
    setSearch("");
    if (searching.length > 0) {
      setSearchedUnities(searching);
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
        searchUnities,
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
