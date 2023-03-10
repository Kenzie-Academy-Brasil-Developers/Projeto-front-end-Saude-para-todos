import React, { useContext } from "react";
import defaultUserImg from "../../images/defaultUserImg.svg";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { UserContext } from "../../Providers/UserContext";
import { StyledDiv} from "./header";
import { StyledUl } from "./Menu/menu";
import { StyledLink } from "../../styles/buttons-style";

export const Header = () => {
  const { userLogout, user } = useContext(UserContext);

  const { menuHeader, setMenuHeader } = useContext(UnitiesContext);

  return (
    <>
      {!menuHeader ? (
        <StyledDiv>
          <div>
            <img src={user?.image ? user?.image : defaultUserImg} alt="" />
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
              <img src={user ? user.image : defaultUserImg} alt="" />
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

              <li
                onClick={() => {
                  setMenuHeader(false);
                }}
              >
                <StyledLink  to={"/RegisterUnits"}>
                  Cadastrar Unidade
                </StyledLink>
              </li>

              <li
                onClick={() => {
                  setMenuHeader(false);
                }}
              >
                <StyledLink  to={"/PageUser"}>
                  Usuário
                </StyledLink>
              </li>

              <li
                onClick={() => {
                  setMenuHeader(false);
                }}
              >
                <StyledLink  to={"/PagePassword"}>
                  Senha
                </StyledLink>
              </li>

              <li
                onClick={() => {
                  setMenuHeader(false);
                }}
              >
                <StyledLink  to={"/about"}>
                  Sobre nós
                </StyledLink>
              </li>
            </StyledUl>
          </nav>
        </>
      )}
    </>
  );
};
