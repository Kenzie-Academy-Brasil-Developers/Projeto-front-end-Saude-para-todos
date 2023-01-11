import * as yup from "yup"

export const ModalUserSchema = yup.object().shape({
    name: yup
    .string()
    .required('O nome é obrigatório')
    .min(3, "O nome precisa de ao menos 3 caracteres"),

    image: yup
    .string()
    .required("Sua imagem é obrigatório")
    .min(5, "O nome precisa de ao menos 5 caracteres"),
})