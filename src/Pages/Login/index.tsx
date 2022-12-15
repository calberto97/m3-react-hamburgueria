import React from "react";
// import logo from '../../Assets/logo.svg'
// import logo from '../../Assets/logo.svg'
// import pattern from '../../Assets/pattern.svg'
// import message from "../../Assets/message.png";
import StyledMain from "./style";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const LoginPage = () => {
  // const message = require("../../Assets/message.png");
  // const logo = require("../../Assets/logo.svg") as string;
  // const pattern = require("../../Assets/pattern.svg") as string;
  // console.log(logo)

 const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email obrigatório")
      .email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<iData>({ resolver: yupResolver(loginSchema), mode: "onChange" });

  interface iData {
    email: string;
    password: string;
  }

  const onSubmit = (data: iData) => console.log(data);

  return (
    <div className="container">
      <StyledMain>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              {...register("email")}
            />
            <TextField
              id="outlined-basic"
              label="Senha"
              variant="outlined"
              {...register("password")}
            />
            <Button variant="contained" color="success" type="submit">
              Logar
            </Button>
          </form>
          <small>
            Crie sua conta para saborear muitas delícias e matar sua
            fome!
          </small>
          <Button variant="contained">Cadastrar</Button>
        </div>
        <div>
          {/* <img src={logo} alt="" /> */}
          {/* <img src={message} alt="" /> */}
          {/* <img src={pattern} alt="" /> */}
        </div>
      </StyledMain>
    </div>
  );
};

export default LoginPage;
