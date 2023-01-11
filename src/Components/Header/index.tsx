
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import defaultUserImg from "../../images/defaultUserImg.svg";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { UserContext } from "../../Providers/UserContext";
import { StyledDiv } from "./header";
import { StyledUl } from "./Menu/menu";
import { StyledLink } from '../../styles/buttons-style' 

export const Header = () => {
  const { userLogout, user, openModal,
    setOpenModal, modalPassword, setModalPassword} = useContext(UserContext);

  const { menuHeader, setMenuHeader } = useContext(UnitiesContext);

  return (
    <>
      {!menuHeader ? (
        <StyledDiv>
          <div>
            <img src={defaultUserImg} alt="" />
            <h4>Olá, {user?.name}</h4>
          </div>
          <div>
            <button onClick={() => setMenuHeader(true)}>Menu</button>
            <button onClick={() => userLogout()}>Sair</button>
          </div>
        </StyledDiv>
      ) : (
        <>
          <StyledDiv>
            <div>
              <img src={defaultUserImg} alt="" />
              <h4>Olá, {user?.name}</h4>
            </div>
            <div>
              <button id="btnMenu" onClick={() => setMenuHeader(false)}>
                Menu
              </button>
              <button onClick={() => userLogout()}>Sair</button>
            </div>
          </StyledDiv>
          <nav>
            <StyledUl>
              <li>Hospitais</li>
              <li>Policlínicas</li>
              <li>Postos de Saúde</li>
              <li>Upas</li>
              <li>Configurações</li>
              <li> <Link to={"/PageUser"}>Usuário</Link></li>
              <li > <Link to={"/PagePassword"}>Senha</Link> </li>
              <StyledLink className="grey-Link" to={"/about"}>Sobre nós</StyledLink>
            </StyledUl>
          </nav>
        </>
      )}
    </>
  );
};
