import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserContext } from "../../Providers/UserContext";
import abotUsImage from "../../../src/images/About-Us-Image.svg";
import { StyledAboutPage } from "./styles";
import { StyledLink } from "../../styles/buttons-style";

export const AboutPage = () => {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return <h2>Carrregando...</h2>;
  }
  return user ? (
    <StyledAboutPage>
      <Header />
      <button>
        <StyledLink className="grey-Link" to={"/home"}>
          Home
        </StyledLink>
      </button>
      <div className="content">
        <h1>SAÚDE PARA TODOS</h1>
        <img src={abotUsImage} alt="" />
        <p>Em linhas gerais, o objetivo do SAÚDE PARA TODOS é:</p>
        <p>
          Centralizar informações e contatos das unidades de saúde como UPAs e
          Policlínicas ao redor do Brasil.
        </p>
        <p>
          Onde o usuário pesquisa através do seu CEP ou demais dados de
          localidade e obtém como resultado as informações gerais dos serviços
          prestados e contatos das unidades de saúde mais próximas.
        </p>
        <span>
          DESENVOLVEDORES:
          <p className="first">Alessandro Tanus</p>
          <p>Antonio Claudino</p>
          <p>Francisco Anghinoni</p>
          <p>Gabriel Ortiz</p>
          <p>Marco Souza</p>
          <p>Mateus Rocha</p>
        </span>
      </div>
      <Footer />
    </StyledAboutPage>
  ) : (
    <Navigate to="/" />
  );
};
