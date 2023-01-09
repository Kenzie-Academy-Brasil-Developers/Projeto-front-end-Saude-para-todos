import React, { useContext, useEffect } from "react";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { StyledUlUnityCard } from "./unityPage";

export const UnityPage = () => {
  //no click do cart da unidade de saude, abre esse componente
  const { singleUnity, setSingleUnity } = useContext(UnitiesContext);

  return (
    <>
      {singleUnity && (
        <StyledUlUnityCard>
          <button onClick={()=>setSingleUnity(null)}>Voltar</button>
          <img src="" alt="" />
          <li>{singleUnity?.nome_fantasia}</li>
          <li>{singleUnity?.codigo_cep_estabelecimento}</li>
          <li>{singleUnity?.endereco_estabelecimento}</li>
          <li>{singleUnity?.numero_estabelecimento}</li>
          <li>{singleUnity?.bairro_estabelecimento}</li>
          <li>{singleUnity?.numero_telefone_estabelecimento}</li>
          <li>{"nao tem img"}</li>
          <li>link?</li>
        </StyledUlUnityCard>
      )}
    </>
  );
};
