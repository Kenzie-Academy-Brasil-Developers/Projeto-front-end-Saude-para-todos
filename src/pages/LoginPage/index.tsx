import { useContext } from "react";
import { LoginContainer } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "./LoginSchema";
import { UserContext } from "../../Providers/UserContext";
import { Button } from "../../Components/Button";
import InputMaterial from "../../Components/InputMaterial";
import { Link } from "react-router-dom";
import { IFormData } from "./interfaceLogin";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>({
    resolver: yupResolver(LoginSchema),
    mode: "onBlur",
  });

  const { setUser, userLogin } = useContext(UserContext);

  const submit = (data: IFormData) => {
    userLogin(data, setUser);
    reset();
  };

  return (
    <>
      <LoginContainer>
        <h1>ST</h1>
        <h3>Saúde Para Todos</h3>
        <form onSubmit={handleSubmit(submit)}>
          <InputMaterial
            type="text"
            label="Email"
            id="email"
            error={errors.email}
            placeholder="E-mail"
            register={register("email")}
            disabled={false}
          />
          {errors.email && (
            <p className="p-error" aria-label="Error: E-mail">
              {errors.email.message}
            </p>
          )}
          <InputMaterial
            type="password"
            label="Senha"
            id={"password"}
            error={errors.password}
            placeholder="Senha"
            register={register("password")}
            disabled={false}
          />
          {errors.password && (
            <p className="p-error" aria-label="Error: Password">
              {errors.password.message}
            </p>
          )}
          <span>Esqueci minha senha</span>
          <Button text={"Entrar"} />
          <Link to={"/register"}>Cadastrar</Link>
        </form>
      </LoginContainer>
    </>
  );
};
