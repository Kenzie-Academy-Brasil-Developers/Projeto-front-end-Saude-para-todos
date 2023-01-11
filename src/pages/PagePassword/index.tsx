import React, { useContext } from 'react'
import { FormPagePassword, PagePasswordContainer, PagPasswordBackground, StyledDivPerfill } from './style';
import { SubmitHandler, useForm } from "react-hook-form";
import defaultUserImg from "../../images/defaultUserImg.svg";
import { UserContext } from '../../Providers/UserContext';
import { yupResolver } from '@hookform/resolvers/yup';
import { PagePasswordSchema } from './PasswordSchema';
import { iRegisterFormValues } from '../RegisterPage/interfaceRegister';
import { Link } from 'react-router-dom';

export const PagePassword = () => {
    const {
      user,
      setOpenModal,
      editModal,
      setEditModal,
      userEdit,
      userPassword,
    } = useContext(UserContext);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<iRegisterFormValues>({
      mode: "onChange",
      resolver: yupResolver(PagePasswordSchema)
    });
    
    const submit:SubmitHandler<iRegisterFormValues>=(formData) => {
        console.log(formData)
        console.log(user?.id)
        userPassword(formData, user?.id)
    }
    
    return (
      <PagPasswordBackground>
        <PagePasswordContainer>
        <div className="textArea">
         <Link to={'/home'}> Voltar </Link> 
      </div>
          <StyledDivPerfill>
            <img src={defaultUserImg} alt="" />
            <h4>{user?.name}</h4>
            <button onClick={() => setEditModal(!editModal)}>
              {editModal ? "Cancelar" : "Editar Usuário"}
            </button>
          </StyledDivPerfill>
          <div>
        <FormPagePassword onSubmit={handleSubmit(submit)}>
        <input
            type="password"
            placeholder="Senha Atual"
            
            disabled
          />
          <input
            type="password"
            placeholder="Nova Senha."
            {...register("password")}
            disabled={!editModal}
          />
          <input
            type="password"
            placeholder="Confirmar Senha."
            {...register("passwordConfirm")}
            disabled={!editModal}
          />
          {editModal && <button type="submit">Enviar</button>}
         </FormPagePassword>
          </div>
        </PagePasswordContainer>
      </PagPasswordBackground>
    );
  };
