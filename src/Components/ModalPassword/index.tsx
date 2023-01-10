import React, { useContext } from 'react'
import defaultUserImg from "../../images/defaultUserImg.svg";
import { UserContext } from '../../Providers/UserContext';
import { ModalBackground } from '../ModalUser/style'
import { FormModalUser, ModalContainer } from './style'

export const ModalPassword = () => {

    const{user, modalPassword, setModalPassword}= useContext(UserContext);

  return (
    <ModalBackground>
        <ModalContainer>
            <div className='textArea'>
                <button onClick={()=> setModalPassword(false)}>X</button>
            </div>
            <div>
            <img src={defaultUserImg} alt="" />
            <h4>Fabio</h4>
            <button>Editar Usuario</button>
          </div>
          <FormModalUser>
                <input type="password" placeholder='Senha Atual.'/>
                <input type="password" placeholder='Nova Senha.'/>
                <input type="password" placeholder='Confirmar Senha.'/>
            </FormModalUser>
        </ModalContainer>
    </ModalBackground>
  )
}
