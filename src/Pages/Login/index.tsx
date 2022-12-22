import { useContext, useEffect } from "react";
import logo from "../../Assets/logo.svg";
import pattern from "../../Assets/pattern.svg";
import message from "../../Assets/message.png";
import StyledMain from "./style";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { iData, UserContext } from "../../Context/UserContext";
import loginSchema from "./loginSchema";
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  const { onSubmitLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitSuccessful },
  } = useForm<iData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="container">
      <StyledMain>
        <div className="left">
          <h4>Login</h4>
          <form onSubmit={handleSubmit(onSubmitLogin)}>
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
            <Button
              variant="contained"
              color="success"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Logar
            </Button>
          </form>
          <small>
            Crie sua conta para saborear muitas delícias e matar sua
            fome!
          </small>
          <Link to={"/register"}>
          Cadastrar  
          </Link>
        </div>
        <div className="right">
          <img src={logo} alt="" className="logo" />
          <img src={message} alt="" className="message" />
          <img src={pattern} alt="" className="pattern" />
        </div>
        <Toaster />
      </StyledMain>
    </div>
  );
};

export default LoginPage;
