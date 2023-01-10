import React, { useContext } from 'react'
import defaultUserImg from "../../images/defaultUserImg.svg";
import { UserContext } from '../../Providers/UserContext'
import { FormModalUser, ModalBackground, ModalContainer } from './style'

export const ModalUser = () => {
    
    const{user, openModal, setOpenModal,  editModal, 
      setEditModal,}= useContext(UserContext);
      
  return (
    <ModalBackground>
    <ModalContainer>
      
        <div className='textArea'>
            <button onClick={()=> setOpenModal(false)}>X</button>
        </div>
        <div>
            <img src={defaultUserImg} alt="" />
            <h4>fabio</h4>
            <button>Editar Usuario</button>
        </div>
        <div>
            <FormModalUser>
                <input type="text"  disabled/>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Cidade' disabled/>
                <input type="text" placeholder='Estado'disabled/>
                <input type="text" placeholder='Imagem'disabled/>
                <input type="text" placeholder='Cep'disabled/>
                  
            </FormModalUser>
        </div>
    </ModalContainer>
    </ModalBackground>
  )
}
