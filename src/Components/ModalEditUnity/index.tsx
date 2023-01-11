import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import InputMaterial from "../InputMaterial";

export const index = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <form>
        <InputMaterial
          type="number"
          id="userId"
          label="userId "
          placeholder="userId"
        />

        <InputMaterial
          type="text"
          id="nome_fantasia"
          label="nome_fantasia "
          placeholder="nome_fantasia"
        />

        <InputMaterial
          type="number"
          id="codigo_cep_estabelecimento"
          label="codigo_cep_estabelecimento "
          placeholder="codigo_cep_estabelecimento"
        />

        <InputMaterial
          type="text"
          id="endereco_estabelecimento"
          label="endereco_estabelecimento "
          placeholder="endereco_estabelecimento"
        />

        <InputMaterial
          type="number"
          id="numero_estabelecimento"
          label="numero_estabelecimento "
          placeholder="numero_estabelecimento"
        />

        <InputMaterial
          type="text"
          id="bairro_estabelecimento"
          label="bairro_estabelecimento "
          placeholder="bairro_estabelecimento"
        />

        <InputMaterial
          type="number"
          id="numero_telefone_estabelecimento"
          label="numero_telefone_estabelecimento "
          placeholder="numero_telefone_estabelecimento"
        />

        <InputMaterial
          type="text"
          id="descricao_turno_atendimento"
          label="descricao_turno_atendimento "
          placeholder="descricao_turno_atendimento"
        />
      </form>
    </div>
  );
};

// {
//     "userId":5,
//     "nome_fantasia": "teste1",
//     "codigo_cep_estabelecimento": "1345135135",
//     "endereco_estabelecimento": "AV CAMPOS SALES",
//     "numero_estabelecimento": "6",
//     "bairro_estabelecimento": "CENTRO",
//     "numero_telefone_estabelecimento": "(34)34343434",
//     "descricao_turno_atendimento": "aaaaaaaaa"
//     }
