import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import StyledMain from "./style";
import logo from "../../Assets/logo.svg";
import pattern from "../../Assets/pattern.svg";
import message from "../../Assets/message.png";
import { Link } from "react-router-dom";
import registerSchema from "./registerSchema";
import {
  iDataRegister,
  UserContext,
} from "../../Context/UserContext";
import { Toaster } from "react-hot-toast";

const RegisterPage = () => {
  const { onSubmitRegister, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
  } = useForm<iDataRegister>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      email: "",
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="container">
      <StyledMain>
        <div className="left">
          <img srcSet={logo} alt="" className="logo" />
          <img srcSet={message} alt="" className="message" />
          <img srcSet={pattern} alt="" className="pattern" />
        </div>
        <div className="right">
          <span>
            <h4>Cadastro</h4>
            <Link to={"/login"}>Retornar para o login</Link>
          </span>
          <form onSubmit={handleSubmit(onSubmitRegister)}>
            <TextField
              label="Nome"
              variant="outlined"
              type="text"
              disabled={loading}
              color={isDirty ? "success" : "primary"}
              error={errors.name !== undefined}
              helperText={errors.name?.message}
              {...register("name")}
            />
            <TextField
              label="E-mail"
              variant="outlined"
              type="email"
              disabled={loading}
              color={isDirty ? "success" : "primary"}
              error={errors.email !== undefined}
              helperText={errors.email?.message}
              {...register("email")}
            />
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              disabled={loading}
              color={isDirty ? "success" : "primary"}
              error={errors.password !== undefined}
              helperText={errors.password?.message}
              {...register("password")}
            />
            <TextField
              label="Confirmar Senha"
              variant="outlined"
              type="password"
              disabled={loading}
              color={isDirty ? "success" : "primary"}
              error={errors.passwordOK !== undefined}
              helperText={errors.passwordOK?.message}
              {...register("passwordOK")}
            />
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Cadastrar
            </Button>
          </form>
        </div>
        <Toaster />
      </StyledMain>
    </div>
  );
};

export default RegisterPage;
