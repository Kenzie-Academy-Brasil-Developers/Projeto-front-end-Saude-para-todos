import React, { useContext, useEffect } from "react";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { StyledDivModalUnitiesUpa, StyledSectionModalUnitiesUpa } from "./syle";


export const UnityModal = () => {
  //no click do cart da unidade de saude, abre esse componente
  const { singleUnity, setSingleUnity, setModalInfoUnities } = useContext(UnitiesContext);
  console.log(singleUnity)
  return (
        <StyledDivModalUnitiesUpa>
          <StyledSectionModalUnitiesUpa>
            <button onClick={() => setModalInfoUnities(false)}>X</button>
            {/* <img src="" alt="" /> */}
            <h2>{singleUnity?.nome_fantasia}</h2>
            <span>Telefone: {singleUnity?.numero_telefone_estabelecimento}</span>
            <p>Rua: {singleUnity?.endereco_estabelecimento}</p>
            <p>N°{singleUnity?.numero_estabelecimento}</p>
            <p>Bairro: {singleUnity?.bairro_estabelecimento}</p>
            <span>Cep: {singleUnity?.codigo_cep_estabelecimento}</span>
            <p>{"nao tem img"}</p>
            <button>
            <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=<${singleUnity?.codigo_cep_estabelecimento} >`}>Vê no Map</a>
            </button>
           
          </StyledSectionModalUnitiesUpa>
          
        </StyledDivModalUnitiesUpa>
   
  );
};
