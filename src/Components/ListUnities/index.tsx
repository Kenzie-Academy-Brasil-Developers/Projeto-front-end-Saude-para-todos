import { useContext } from "react";
import { iUnity } from "../../Providers/@types";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { UserContext } from "../../Providers/UserContext";
import { CardUpas, iCardUpas } from "./CardUnities";
import { StyledDivUnitiesUl, StyledUlListUnities } from "./styled";

export const UpasList = () => {
  const { allUnities, setAllUnities, setIdUnities, setModalInfoUnities, ModalUnities, setUnitie, loading, searchedUnities } =
    useContext(UnitiesContext);
  const { userZipCodeCity } = useContext(UserContext);
    const allUnitiesFilter : iUnity[] | undefined|any =  allUnities.filter((i: { codigo_cep_estabelecimento: string }) => i.codigo_cep_estabelecimento.substring(0, 2) === userZipCodeCity.substring(0, 2))

    
  return (
      <StyledDivUnitiesUl>
        
    <StyledUlListUnities>
      {searchedUnities.length > 0 ? searchedUnities.map((upa: iCardUpas|any) => {
        return (
          <CardUpas
          onClick={async() => {
            setIdUnities(Number(upa.codigo_cep_estabelecimento));
            const unities = await ModalUnities(Number(upa.id))
            setUnitie(unities)
            setModalInfoUnities(true);
            }}
            key={upa.id}
            setIdUnities={upa.id}
            nome_fantasia={upa.nome_fantasia}
            codigo_cep_estabelecimento={upa.codigo_cep_estabelecimento}
            endereco_estabelecimento={upa.endereco_estabelecimento}
            numero_estabelecimento={upa.numero_estabelecimento}
            bairro_estabelecimento={upa.bairro_estabelecimento}
            numero_telefone_estabelecimento={
              upa.numero_telefone_estabelecimento
            }
            />
            );
          }) 
          :
          allUnitiesFilter.map((upa: iCardUpas|any) => {
            return (
              <CardUpas
              onClick={async() => {
                setIdUnities(Number(upa.codigo_cep_estabelecimento));
                const unities = await ModalUnities(Number(upa.id))
                setUnitie(unities)
                setModalInfoUnities(true);
              }}
              key={upa.id}
              setIdUnities={upa.id}
              nome_fantasia={upa.nome_fantasia}
              codigo_cep_estabelecimento={upa.codigo_cep_estabelecimento}
              endereco_estabelecimento={upa.endereco_estabelecimento}
              numero_estabelecimento={upa.numero_estabelecimento}
              bairro_estabelecimento={upa.bairro_estabelecimento}
              numero_telefone_estabelecimento={
                upa.numero_telefone_estabelecimento
              }
              />
              );
            })
            
          }
    </StyledUlListUnities>
          </StyledDivUnitiesUl>
  );
};
