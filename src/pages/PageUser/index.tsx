import React, { useContext } from "react";
import { iRegisterFormValues } from "../../pages/RegisterPage/interfaceRegister";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserContext } from "../../Providers/UserContext";
import {
  ContainerForm,
  DivButton,
  FormModalUser,
  LinkUser,
  PageUserBackground,
  PageUserContainer,
  StyledButton,
  StyledDivPerfil,
} from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { PageUserSchema } from "./PageUserSchema";
import defaultUserImg from "../../images/defaultUserImg.svg";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export const PageUser = () => {
  const { user, setOpenModal, editModal, setEditModal, userEdit } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(PageUserSchema),
  });
  
  const submit:SubmitHandler<iRegisterFormValues>=(formData) => {
    
     userEdit(formData, user?.id)
  }
  return (
    <>
      <Header />
      <PageUserContainer>
        <div className="textArea">
          
        </div>
        <StyledDivPerfil>
        {editModal ? <p>O que você deseja atualizar</p> :  <img src={user? user.image : defaultUserImg} alt="" />}
        <div>
        <button onClick={() => setEditModal(!editModal)}>
          {editModal ? "Cancelar" : "Editar Usuário"}
        </button>
        </div>
        </StyledDivPerfil>
        <ContainerForm>
          <FormModalUser onSubmit={handleSubmit(submit)}>
            <input
              type="text"
              placeholder={user?.name}
              disabled={!editModal}
              {...register("name")}
            />
            {errors.name && (
              <p className="p-error" aria-label="Error: Name">
                {errors.name.message}
              </p>
            )}
            <input
              type="email"
              disabled
              placeholder={user?.email}
              {...register("email")}
             
            />
            <input
              type="text"
              placeholder={user?.city}
              disabled
              {...register("city")}
            />
            <input
              type="text"
              placeholder={user?.state}
              disabled
              {...register("state")}
            />
            <input
              type="text"
              placeholder="Image"
              {...register("image")}
              disabled={!editModal}
            />
            {errors.image && (
              <p className="p-error" aria-label="Error: Image Confirmation">
                {errors.image.message}
              </p>
            )}
            <input
              type="text"
              disabled
              placeholder={user?.zipCode}
              {...register("zipCode")}
            />
            <DivButton>
            {editModal && <LinkUser to={"/home"}> Cancelar </LinkUser>}
            {editModal && <StyledButton type="submit">Enviar</StyledButton>}
            </DivButton>
          </FormModalUser>
        </ContainerForm>
      </PageUserContainer>
      <Footer />
    </>
  );
};
