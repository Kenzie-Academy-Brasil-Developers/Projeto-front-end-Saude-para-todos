import React, { useContext, useEffect } from "react";
import { UnitiesContext } from "../../Providers/unitiesContext";

export const UnityPage = () => {
  //no click do cart da unidade de saude, abre esse componente
  const { singleUnity} = useContext(UnitiesContext);

  return (
    <ul>
      <img src="" alt="" />
      <li>{singleUnity?.nome_fantasia}</li>
      <li>{singleUnity?.codigo_cep_estabelecimento}</li>
      <li>{singleUnity?.endereco_estabelecimento}</li>
      <li>{singleUnity?.numero_estabelecimento}</li>
      <li>{singleUnity?.bairro_estabelecimento}</li>
      <li>{singleUnity?.numero_telefone_estabelecimento}</li>
      <li>{"nao tem img"}</li>
      <li>link?</li>
    </ul>
  );
};
