import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Este campo e obrigatorio")
    .email("Email invalido"),
  password: yup.string().required("A senha e obrigatoria"),
});
