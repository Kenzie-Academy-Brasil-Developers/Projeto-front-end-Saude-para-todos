import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import defaultUserImg from "../../images/defaultUserImg.svg";
import { iRegisterFormValues } from "../../pages/RegisterPage/interfaceRegister";
import { UserContext } from "../../Providers/UserContext";
import { ModalBackground } from "../ModalUser/style";
import { passwordSchema } from "./PasswordSchema";
import { FormModalUser, ModalContainer } from "./style";

export const ModalPassword = () => {
  const {
    user,
    modalPassword,
    setModalPassword,
    userEdit,
    editModal,
    setEditModal,
  } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(passwordSchema),
  });

  const submit: SubmitHandler<iRegisterFormValues> = (formData) => {
    userEdit(formData, user!.id);
    console.log(formData);
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <div className="textArea">
          <button onClick={() => setModalPassword(false)}>X</button>
        </div>
        <div>
          <img src={defaultUserImg} alt="" />
          <h4>{user?.name}</h4>
          <button onClick={() => setEditModal(!editModal)}>
            {editModal ? "Cancelar" : "Editar Usuário"}
          </button>
        </div>
        <FormModalUser onSubmit={handleSubmit(submit)}>
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
        </FormModalUser>
      </ModalContainer>
    </ModalBackground>
  );
};
