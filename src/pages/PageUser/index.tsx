import React, { useContext } from 'react'
import { iRegisterFormValues } from "../../pages/RegisterPage/interfaceRegister";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../Providers/UserContext";
import { FormModalUser, PageUserBackground, PageUserContainer, StyledDivPerfil } from "./style";
import { yupResolver } from '@hookform/resolvers/yup';
import { PageUserSchema } from './PageUserSchema';
import defaultUserImg from "../../images/defaultUserImg.svg";
import { Link } from 'react-router-dom';

export const PageUser = () => {

  const {
    user,
    setOpenModal,
    editModal,
    setEditModal,
    userEdit,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(PageUserSchema)
  });
  
  const submit:SubmitHandler<iRegisterFormValues>=(formData) => {
    
     userEdit(formData, user?.id)
  }
  return (
    <PageUserBackground>
    <PageUserContainer>
      <div className="textArea">
         <Link to={'/home'}> Voltar </Link> 
      </div>
      <StyledDivPerfil>
      {editModal ? "O que você deseja atualizar" : <img src={defaultUserImg} alt="" />}
        
        <button onClick={() => setEditModal(!editModal)}>
          {editModal ? "Cancelar" : "Editar Usuário"}
        </button>
      </StyledDivPerfil>
      <div>
        <FormModalUser onSubmit={handleSubmit(submit)}>
          <input
            type="text"
            placeholder={user?.name}
            {...register("name")}
            disabled={!editModal}
          />
          {errors.name && <p className="p-error" aria-label="Error: Name">{errors.name.message}</p>}
          <input
            type="email"
            disabled
            placeholder={user?.email}
            {...register("email")}
          />
          <input type="text" placeholder={user?.city} disabled {...register("city")}/>
          <input
            type="text"
            placeholder={user?.state}
            disabled
            {...register("state")}
          />
          <input type="text" placeholder="Image" disabled={!editModal} {...register("image")}/>
          {errors.image && <p className="p-error" aria-label="Error: Image Confirmation">{errors.image.message}</p>}
          <input type="text" disabled placeholder={user?.zipCode} {...register("zipCode")}/>
          {editModal && <button type="submit">Enviar</button>}
        </FormModalUser>
      </div>
    </PageUserContainer>
  </PageUserBackground>
  )
}


