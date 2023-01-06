import React, { useContext } from "react";
import { Input } from "../../Components/Input";
import { LoginContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { UserContext } from "../../Providers/UserContext";
import { Button } from "../../Components/Button";

export const LoginPage = () => {
  interface IFormData {
    name: string;
    email: string;
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  const { setUser } = useContext(UserContext);

  const submit = (data: IFormData) => {
    reset();
  };

  return (
    <>
      <LoginContainer>
        <h1>ST</h1>
        <h3>Saúde Para Todos</h3>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="email"
            id="E-mail"
            label="E-mail"
            disabled={false}
            placeholder=""
            register={register("email")}
          />
          {errors.email?.message && <p> {errors.email.message}</p>}
          <Input
            type="password"
            id="Senha"
            label="Senha"
            disabled={false}
            placeholder=""
            register={register("password")}
          />
          {errors.email?.message && <p> {errors.email.message}</p>}
          <span>Esqueci minha senha</span>
          <Button text={"Entrar"} />
          <button>Cadastrar</button>
        </form>
      </LoginContainer>
    </>
  );
};
