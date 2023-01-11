import React, { useContext } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserContext } from "../../Providers/UserContext";
import { useForm } from "react-hook-form";
import { idata } from "./@types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalSchema } from "./EditUnitySchema";
import { Div } from "./styles";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { Link } from "react-router-dom";

export const RegisterUnits = () => {
  const { createUnity } = useContext(UnitiesContext);
  const userId: string | null = localStorage.getItem("@userId");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<idata>({
    resolver: yupResolver(ModalSchema),
    mode: "onBlur",
  });

  const submit = (data: idata) => {
    const formData: idata = { ...data, userId };

    createUnity(formData);

    reset();
  };

  return (
    <>
      <Header />
      <Div>
        <h3>Você está cadastrando uma unidade...</h3>
        <form onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            id="nome_fantasia"
            placeholder="Nome Fantasia"
            {...register("nome_fantasia")}
            disabled={false}
          />
          {errors.nome_fantasia && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.nome_fantasia.message}
            </p>
          )}
          <input
            type="number"
            id="codigo_cep_estabelecimento"
            placeholder="Cep"
            {...register("codigo_cep_estabelecimento")}
            disabled={false}
          />
          {errors.codigo_cep_estabelecimento && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.codigo_cep_estabelecimento.message}
            </p>
          )}
          <input
            type="text"
            id="endereco_estabelecimento"
            placeholder="Endereço"
            {...register("endereco_estabelecimento")}
            disabled={false}
          />
          {errors.endereco_estabelecimento && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.endereco_estabelecimento.message}
            </p>
          )}
          <input
            type="number"
            id="numero_estabelecimento"
            placeholder="Número"
            {...register("numero_estabelecimento")}
            disabled={false}
          />
          {errors.numero_estabelecimento && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.numero_estabelecimento.message}
            </p>
          )}
          <input
            type="text"
            id="bairro_estabelecimento"
            placeholder="Bairro"
            {...register("bairro_estabelecimento")}
            disabled={false}
          />
          {errors.bairro_estabelecimento && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.bairro_estabelecimento.message}
            </p>
          )}
          <input
            type="number"
            id="numero_telefone_estabelecimento"
            placeholder="Contato"
            {...register("numero_telefone_estabelecimento")}
            disabled={false}
          />
          {errors.numero_telefone_estabelecimento && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.numero_telefone_estabelecimento.message}
            </p>
          )}

          <input
            type="text"
            id="descricao_turno_atendimento"
            placeholder="Turno"
            {...register("descricao_turno_atendimento")}
            disabled={false}
          />
          {errors.descricao_turno_atendimento && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.descricao_turno_atendimento.message}
            </p>
          )}
          <div>
            <Link to={"/home"}>Voltar</Link>
            <button type="submit">Concluir cadastro</button>
          </div>
        </form>
      </Div>
      <Footer />
    </>
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
