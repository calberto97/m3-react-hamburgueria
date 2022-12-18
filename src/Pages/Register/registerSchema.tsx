import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Nome deve ter mais de 3 caracteres")
    .max(80, "Nome não pode ter mais de 80 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=^.{6,}$)/, "Senha deve ter no mínimo 6 dígitos")
    .matches(
      /(?=.*[a-z])/,
      "Senha deve conter ao menos um caractere minúsculo"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Senha deve conter ao menos um caractere maiúsculo"
    )
    .matches(/(?=.*\d)/, "Senha deve conter ao menos um dígito")
    .matches(
      /(?=.*[!@#$%^&;*()_+}])/,
      "Senha deve conter ao menos um caractere especial"
    ),
  passwordOK: yup
    .string()
    .required("Senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});

export default registerSchema;
