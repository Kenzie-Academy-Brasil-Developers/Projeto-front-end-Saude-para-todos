import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import defaultUserImg from "../../images/defaultUserImg.svg";

import { iRegisterFormValues } from "../../pages/RegisterPage/interfaceRegister";

import { UserContext } from "../../Providers/UserContext";
import { ModalUserSchema } from "./ModalUserSchema";
import { FormModalUser, ModalBackground, ModalContainer, StyledDivPerfil } from "./style";

export const ModalUser = () => {
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
    resolver: yupResolver(ModalUserSchema)
  });
  
  const submit:SubmitHandler<iRegisterFormValues>=(formData) => {
    
     userEdit(formData, user!.id)
  }
  
  return (
    <ModalBackground>
      <ModalContainer>
        <div className="textArea">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <StyledDivPerfil>
          <img src={defaultUserImg} alt="" />
          <h4>{user?.name}</h4>
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
      </ModalContainer>
    </ModalBackground>
  );
};
