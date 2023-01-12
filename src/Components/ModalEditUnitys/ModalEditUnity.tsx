import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserContext";
import { useForm } from "react-hook-form";
import InputMaterial from "../InputMaterial";
import { idata } from "./@types";

export const ModalEditUnity = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<idata>({
    mode: "onBlur",
  });

  const submit = (data: idata) => {
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <InputMaterial
          type="number"
          id="userId"
          placeholder="userId"
          register={register("userId")}
          error={errors.userId}
          disabled={false}
        />

        <InputMaterial
          type="text"
          id="nome_fantasia"
          placeholder="nome_fantasia"
          register={register("nome_fantasia")}
          error={errors.nome_fantasia}
          disabled={false}
        />

        <InputMaterial
          type="number"
          id="codigo_cep_estabelecimento"
          placeholder="codigo_cep_estabelecimento"
          register={register("codigo_cep_estabelecimento")}
          error={errors.codigo_cep_estabelecimento}
          disabled={false}
        />

        <InputMaterial
          type="text"
          id="endereco_estabelecimento"
          placeholder="endereco_estabelecimento"
          register={register("endereco_estabelecimento")}
          error={errors.endereco_estabelecimento}
          disabled={false}
        />

        <InputMaterial
          type="number"
          id="numero_estabelecimento"
          placeholder="numero_estabelecimento"
          register={register("numero_estabelecimento")}
          error={errors.numero_estabelecimento}
          disabled={false}
        />

        <InputMaterial
          type="text"
          id="bairro_estabelecimento"
          placeholder="bairro_estabelecimento"
          register={register("bairro_estabelecimento")}
          error={errors.bairro_estabelecimento}
          disabled={false}
        />

        <InputMaterial
          type="number"
          id="numero_telefone_estabelecimento"
          placeholder="numero_telefone_estabelecimento"
          register={register("numero_telefone_estabelecimento")}
          error={errors.numero_telefone_estabelecimento}
          disabled={false}
        />

        <InputMaterial
          type="text"
          id="descricao_turno_atendimento"
          placeholder="descricao_turno_atendimento"
          register={register("descricao_turno_atendimento")}
          error={errors.descricao_turno_atendimento}
          disabled={false}
        />
      </form>
    </div>
  );
};
