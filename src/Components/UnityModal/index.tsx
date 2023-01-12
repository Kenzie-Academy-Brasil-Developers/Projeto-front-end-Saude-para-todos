import React, { useContext, useEffect } from "react";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { StyledDivModalUnitiesUpa, StyledSectionModalUnitiesUpa } from "./syle";
import imagem from "../../images/hospital.png"

export const UnityModal = () => {
  //no click do cart da unidade de saude, abre esse componente
  const { singleUnity, deleteUnity, setModalInfoUnities } = useContext(UnitiesContext);
  const unityId = singleUnity?.id
  console.log(singleUnity)
  return (
        <StyledDivModalUnitiesUpa>
          <StyledSectionModalUnitiesUpa>
            <button className="closeModal" onClick={() => setModalInfoUnities(false)} >+</button>
            <figure>
            <img src={imagem} alt="" />
            </figure>
            <h2>{singleUnity?.nome_fantasia}</h2>
            <span>Telefone: {singleUnity?.numero_telefone_estabelecimento}</span>
            <p>Rua: {singleUnity?.endereco_estabelecimento}</p>
            <p>N°{singleUnity?.numero_estabelecimento}</p>
            <p>Bairro: {singleUnity?.bairro_estabelecimento}</p>
            <span>Cep: {singleUnity?.codigo_cep_estabelecimento}</span>
            <div>
              <p>Localização:</p>
            <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=<${singleUnity?.codigo_cep_estabelecimento} >`}>Ver no Map</a>
            </div>
            <section>
              <button onClick={ () => deleteUnity(unityId !== undefined ? unityId : 0)} >Deletar unidade</button>
            </section>
           
          </StyledSectionModalUnitiesUpa>
          
        </StyledDivModalUnitiesUpa>
   
  );
};
