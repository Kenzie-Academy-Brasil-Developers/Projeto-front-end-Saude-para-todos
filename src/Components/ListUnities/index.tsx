import { useContext } from "react";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { CardUpas, } from "./CardUnities";
import { StyledDivUnitiesUl, StyledUlListUnities } from "./styled";

export const UpasList = () => {
  const {
    setIdUnities,
    setModalInfoUnities,
    ModalUnities,
    setUnitie,
    newAllUnities,
  } = useContext(UnitiesContext);
  
  return (
    <StyledDivUnitiesUl>
      <h2>Unidades de Pronto Atendimento</h2>
      <StyledUlListUnities>
        {newAllUnities.map((upa) => {
          return (
            <CardUpas
              onClick={async () => {
                setIdUnities(Number(upa.codigo_cep_estabelecimento));
                const unities = await ModalUnities(Number(upa.id));
                setUnitie(unities);
                setModalInfoUnities(true);
              }}
              key={upa.id}
              setIdUnities={upa.id}
              nome_fantasia={upa.nome_fantasia}
              numero_telefone_estabelecimento={
                upa.numero_telefone_estabelecimento
              }
              codigo_cep_estabelecimento={upa.codigo_cep_estabelecimento}
              // endereco_estabelecimento={upa.endereco_estabelecimento}
              // numero_estabelecimento={upa.numero_estabelecimento}
              // bairro_estabelecimento={upa.bairro_estabelecimento}
            />
          );
        })}
      </StyledUlListUnities>
    </StyledDivUnitiesUl>
  );
};
