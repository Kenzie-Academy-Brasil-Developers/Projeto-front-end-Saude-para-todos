import * as yup from "yup";

export const ModalSchema = yup.object().shape({
  userId: yup.string().required("Este campo e obrigatorio"),
  nome_fantasia: yup.string().required("Este campo e obrigatorio"),
  codigo_cep_estabelecimento: yup
    .string()
    .required("Este campo e obrigatorio")
    .min(8, "precisa ter pelo menos 8 caracteres"),
  endereco_estabelecimento: yup.string().required("Este campo e obrigatorio"),
  numero_estabelecimento: yup.string().required("Este campo e obrigatorio"),
  bairro_estabelecimento: yup.string().required("Este campo e obrigatorio"),
  numero_telefone_estabelecimento: yup
    .string()
    .required("Este campo e obrigatorio"),
  descricao_turno_atendimento: yup
    .string()
    .required("Este campo e obrigatorio"),
});
