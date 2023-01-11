import React, { useContext } from "react";
import {
  FormPagePassword,
  PagePasswordContainer,
  PagPasswordBackground,
  StyledDivPerfill,
} from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import defaultUserImg from "../../images/defaultUserImg.svg";
import { UserContext } from "../../Providers/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { PagePasswordSchema } from "./PasswordSchema";
import { iRegisterFormValues } from "../RegisterPage/interfaceRegister";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { DivButton, LinkUser, StyledButton } from "../PageUser/style";

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
    resolver: yupResolver(PagePasswordSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = (formData) => {
    userEdit(formData, user?.id);
  };
  console.log(errors);
  return (
    <>
    <Header/>
    
      <PagePasswordContainer>
        <div className="textArea">
          
        </div>
        <StyledDivPerfill>
        <img src={user? user.image : defaultUserImg} alt="" />
        
        </StyledDivPerfill>
        <div>
          <FormPagePassword onSubmit={handleSubmit(submit)}>
            <input type="password" placeholder="Senha Atual" disabled />
            <input
              type="password"
              placeholder="Nova Senha."
              {...register("password")}
              
            />
            <input
              type="password"
              placeholder="Confirmar Senha."
              {...register("passwordConfirm")}
              
            />
            <DivButton>
              <LinkUser to={"/home"}> Cancelar </LinkUser>
             <StyledButton type="submit">Enviar</StyledButton>
             
             </DivButton>
          </FormPagePassword>
        </div>
      </PagePasswordContainer>
    
    <Footer/>
    </>
  );
};
