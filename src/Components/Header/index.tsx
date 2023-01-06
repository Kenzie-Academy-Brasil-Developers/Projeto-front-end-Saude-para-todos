import React, { useContext } from "react";
import defaultUserImg from "../../images/defaultUserImg.svg";
import { UserContext } from "../../Providers/UserContext";
import { StyledDiv } from "./header";

export const Header = () => {

    const {userLogout} = useContext(UserContext)
  return (
    <StyledDiv>
      <div>
        <img src={defaultUserImg} alt="" />
        <h4>Olá, {"USERNAME"}</h4>
      </div>
      <div>
        <button>Menu</button>
        <button onClick={userLogout}>Sair</button>
      </div>
    </StyledDiv>
  );
};
